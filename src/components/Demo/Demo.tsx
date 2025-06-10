"use client";
import React from "react";
import { useDevice } from '@/providers/DeviceProvider';
import { trackEvent } from "@/lib/analytics";
import { useTrack } from "@/hooks/useTrack";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { Button } from "@/components/ui/Button/Button";
import { useTranslations } from "next-intl";


type DemoProps = {
  className?: string;
};
export const Demo = React.forwardRef<HTMLUListElement, DemoProps>(
  ({ className }, ref) => {
    const t = useTranslations("Demo");
    const { isMobile } = useDevice();
    const track = useTrack();
    return (
      <div className={`max-w-md mx-auto mt-8 p-6 rounded-xl border border-gray-200 bg-white dark:bg-zinc-900 shadow-sm ${className || ''}`}>
        <h2 className="text-xl font-bold mb-2">{t("title")}</h2>
        <p className="text-sm text-muted-foreground mb-4">Hooks & Actions</p>
        <ul ref={ref} className="space-y-4">
          <li className="flex items-center gap-2">
            <span className="font-mono text-blue-600 dark:text-blue-400">useDevice</span>:
            <span className="inline-block px-2 py-1 rounded bg-blue-50 dark:bg-zinc-800 text-xs font-semibold">
              {isMobile ? "Mobile" : "Desktop"}
            </span>
          </li>
          <li>
            <button
              className="px-3 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition font-medium"
              onClick={() => trackEvent("demo_button_clicked")}
            >
              {t("trackEvent")}
              <span className="font-mono">trackEvent</span>
            </button>
          </li>
          <li>
            <button
              className="px-3 py-2 rounded bg-secondary text-secondary-foreground hover:bg-secondary/80 transition font-medium"
              onClick={() => track("demo_button_clicked")}
            >
              {t("trackEvent")}
              <span className="font-mono">useTrack</span>
            </button>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
          <li>
            <p>Buttons</p>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <Button variant="outline">Click me</Button>
              <Button variant="ghost">Click me</Button>
              <Button variant="link">Click me</Button>
            </div>
            <div className="flex gap-4 items-center flex-col sm:flex-row w-100">
              <Button variant="outline" fullWidth>
                Click me
              </Button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
);

Demo.displayName = "Demo";
