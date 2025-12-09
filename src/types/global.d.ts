declare global {
  interface Window {
    va?: {
      track: (eventName: string, properties?: Record<string, string | number | boolean>) => void;
    };
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, string | number | boolean>
    ) => void;
    fbq?: (
      command: 'track' | 'init' | 'trackCustom',
      eventName: string,
      params?: Record<string, string | number | boolean>
    ) => void;
    dataLayer?: Array<Record<string, any>>;
  }
}

export {};