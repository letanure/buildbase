// File: src/lib/analytics/index.ts

import { logDev } from "../logger";

/**
 * Analytics abstraction layer.
 * Add tracking providers here later (Google Analytics, Plausible, etc.)
 */

let isInitialized = false;

export function initAnalytics() {
  if (isInitialized) return;
  isInitialized = true;

  // Example: Google Analytics
  // window.gtag('js', new Date());
  // window.gtag('config', 'GA_MEASUREMENT_ID');

    logDev("[Analytics] Initialized");
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!isInitialized) return;

  // Example: Google Analytics
  // window.gtag('event', name, params);

    logDev("[Analytics] Event:", name, params);
}

export function trackPageview(url: string) {
  trackEvent("page_view", { page_location: url });
  logDev("[Analytics] Pageview:", url);
}