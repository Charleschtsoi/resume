"use client";

import { type ReactNode } from "react";
import { PresenterProvider } from "@/lib/presenter-mode";
import { PresenterControls } from "@/components/layout/PresenterControls";

export function PresenterShell({ children }: { children: ReactNode }) {
  return (
    <PresenterProvider>
      {children}
      <PresenterControls />
    </PresenterProvider>
  );
}
