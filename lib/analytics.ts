
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type EventParams = Record<string, any>;

export function pageview(page_path: string) {
  if (!GA_ID) return;
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", "page_view", {
    page_path,
  });
}

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (!GA_ID) return;
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", eventName, {
    // helpful defaults:
    page_path: window.location.pathname,
    ...params,
  });
}
