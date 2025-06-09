// File: src/lib/analytics/index.ts

import { logDev } from "../logger";
import { appConfig } from "@/config";

/**
 * Analytics abstraction layer.
 * Add tracking providers here later (Google Analytics, Plausible, etc.)
 */

let isInitialized = false;

export function initAnalytics() {
  if (isInitialized) return;
  isInitialized = true;

  if (appConfig.analytics.umami.enabled) {
    const script = document.createElement("script");
    script.src = "https://cloud.umami.is/script.js";
    script.async = true;
    script.setAttribute("data-website-id", appConfig.analytics.umami.siteId);
    document.body.appendChild(script);
  }
  if (appConfig.analytics.googleAnalytics.enabled) {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + appConfig.analytics.googleAnalytics.siteId;
    script.async = true;
    document.body.appendChild(script);

    if (!window.dataLayer) {
      window.dataLayer = [];
    }
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", appConfig.analytics.googleAnalytics.siteId);
  }
  if (appConfig.analytics.plausible.enabled) {
    const script = document.createElement("script");
    script.src = "https://plausible.io/js/script.js";
    script.async = true;
    script.setAttribute("data-domain", "buildbase.com");
    document.body.appendChild(script);
  }

  // Example: Google Analytics
  // window.gtag('js', new Date());
  // window.gtag('config', 'GA_MEASUREMENT_ID');
    logDev("[Analytics] Initialized");
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!isInitialized) return;

  if (typeof window !== "undefined") {
    if (appConfig.analytics.umami.enabled && typeof window.umami === "function") {
      window.umami(name, params ? { data: params } : undefined);
    }

    if (appConfig.analytics.googleAnalytics.enabled && typeof window.gtag === "function") {
      window.gtag("event", name, params || {});
    }
  }

  logDev("[Analytics] Event:", name, params);
}

export function trackPageview(url: string) {
  trackEvent("page_view", { page_location: url });
  logDev("[Analytics] Pageview:", url);
}

// Automatically track page views using Next.js router
if (typeof window !== "undefined") {
  import("next/router").then(({ default: router }) => {
    // Initial load
    trackPageview(window.location.pathname);

    // Client-side navigation
    router.events?.on("routeChangeComplete", (url) => {
      trackPageview(url);
    });
  });
}