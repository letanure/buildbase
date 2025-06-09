// src/lib/hooks/useTrack.ts
"use client";

import { useCallback } from "react";
import { trackEvent } from "@/lib/analytics";

export function useTrack() {
  return useCallback((event: string, data?: Record<string, unknown>) => {
    // Only run in the browser
    if (typeof window !== "undefined") {
      trackEvent(event, data);
    }
  }, []);
}