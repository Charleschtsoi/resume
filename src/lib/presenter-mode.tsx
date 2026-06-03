"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const STORAGE_KEY = "resume-presenter-mode";
const PRESENTER_EVENT = "resume-presenter-change";

export const SCROLL_CHAPTER_HEIGHT_DEFAULT = "min-h-[220vh]";
export const SCROLL_CHAPTER_HEIGHT_PRESENT = "min-h-[100vh]";
export const HERO_HEIGHT_DEFAULT = "min-h-[200vh]";
export const HERO_HEIGHT_PRESENT = "min-h-[110vh]";

type PresenterContextValue = {
  isPresenterMode: boolean;
  setPresenterMode: (enabled: boolean) => void;
  togglePresenterMode: () => void;
  chapterHeightClass: string;
  heroHeightClass: string;
  disableScrollEffects: boolean;
};

const PresenterContext = createContext<PresenterContextValue | null>(null);

function readPresenterMode(): boolean {
  if (typeof window === "undefined") return false;
  const fromUrl = new URLSearchParams(window.location.search).get("present") === "1";
  const fromStorage = sessionStorage.getItem(STORAGE_KEY) === "1";
  return fromUrl || fromStorage;
}

function writePresenterMode(enabled: boolean) {
  sessionStorage.setItem(STORAGE_KEY, enabled ? "1" : "0");
  document.documentElement.dataset.presenter = enabled ? "true" : "false";
  window.dispatchEvent(new Event(PRESENTER_EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(PRESENTER_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(PRESENTER_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getServerSnapshot() {
  return false;
}

export function PresenterProvider({ children }: { children: ReactNode }) {
  const isPresenterMode = useSyncExternalStore(
    subscribe,
    readPresenterMode,
    getServerSnapshot
  );

  useEffect(() => {
    document.documentElement.dataset.presenter = isPresenterMode ? "true" : "false";
  }, [isPresenterMode]);

  const setPresenterMode = useCallback((enabled: boolean) => {
    writePresenterMode(enabled);
  }, []);

  const togglePresenterMode = useCallback(() => {
    writePresenterMode(!readPresenterMode());
  }, []);

  const value = useMemo(
    () => ({
      isPresenterMode,
      setPresenterMode,
      togglePresenterMode,
      chapterHeightClass: isPresenterMode
        ? SCROLL_CHAPTER_HEIGHT_PRESENT
        : SCROLL_CHAPTER_HEIGHT_DEFAULT,
      heroHeightClass: isPresenterMode ? HERO_HEIGHT_PRESENT : HERO_HEIGHT_DEFAULT,
      disableScrollEffects: isPresenterMode,
    }),
    [isPresenterMode, setPresenterMode, togglePresenterMode]
  );

  return (
    <PresenterContext.Provider value={value}>{children}</PresenterContext.Provider>
  );
}

export function usePresenterMode() {
  const ctx = useContext(PresenterContext);
  if (!ctx) {
    return {
      isPresenterMode: false,
      setPresenterMode: () => {},
      togglePresenterMode: () => {},
      chapterHeightClass: SCROLL_CHAPTER_HEIGHT_DEFAULT,
      heroHeightClass: HERO_HEIGHT_DEFAULT,
      disableScrollEffects: false,
    };
  }
  return ctx;
}
