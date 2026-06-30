"use client";

import { type ReactNode } from "react";
import { PresenterProvider } from "@/lib/presenter-mode";
import { PresenterControls } from "@/components/layout/PresenterControls";
import { MiniGameLauncher } from "@/components/game/MiniGameLauncher";

export function PresenterShell({ children }: { children: ReactNode }) {
  return (
    <PresenterProvider>
      {children}
      <PresenterControls />
      <MiniGameLauncher />
    </PresenterProvider>
  );
}
