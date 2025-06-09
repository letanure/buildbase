export {};

declare global {
  interface Window {
    umami?: (eventName: string, data?: Record<string, unknown>) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}