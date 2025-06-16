import { useState, useEffect } from 'react';

export interface CookieConsent {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_CONSENT: CookieConsent = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent>(DEFAULT_CONSENT);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('pixzeria-cookie-consent');
    const consentTimestamp = localStorage.getItem('pixzeria-cookie-timestamp');
    
    if (savedConsent && consentTimestamp) {
      // Check if consent is still valid (6 months)
      const sixMonthsAgo = Date.now() - (6 * 30 * 24 * 60 * 60 * 1000);
      const timestamp = parseInt(consentTimestamp);
      
      if (timestamp > sixMonthsAgo) {
        const parsedConsent = JSON.parse(savedConsent);
        setConsent(parsedConsent);
        setHasConsent(true);
        applyConsentSettings(parsedConsent);
      } else {
        // Consent expired, clear it
        localStorage.removeItem('pixzeria-cookie-consent');
        localStorage.removeItem('pixzeria-cookie-timestamp');
      }
    }
  }, []);

  const updateConsent = (newConsent: CookieConsent) => {
    setConsent(newConsent);
    setHasConsent(true);
    localStorage.setItem('pixzeria-cookie-consent', JSON.stringify(newConsent));
    localStorage.setItem('pixzeria-cookie-timestamp', Date.now().toString());
    applyConsentSettings(newConsent);
  };

  const revokeConsent = () => {
    setConsent(DEFAULT_CONSENT);
    setHasConsent(false);
    localStorage.removeItem('pixzeria-cookie-consent');
    localStorage.removeItem('pixzeria-cookie-timestamp');
    applyConsentSettings(DEFAULT_CONSENT);
  };

  const applyConsentSettings = (consentSettings: CookieConsent) => {
    // Analytics cookies management
    if (consentSettings.analytics) {
      // Enable Google Analytics if configured
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'granted'
        });
      }
    } else {
      // Disable analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'denied'
        });
      }
    }

    // Marketing cookies management
    if (consentSettings.marketing) {
      // Enable marketing tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted'
        });
      }
    } else {
      // Disable marketing
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });
      }
    }

    // Functional cookies management
    if (!consentSettings.functional) {
      // Clear functional cookies if disabled
      const functionalCookies = ['form-data', 'website-check-cache'];
      functionalCookies.forEach(cookieName => {
        localStorage.removeItem(cookieName);
      });
    }
  };

  return {
    consent,
    hasConsent,
    updateConsent,
    revokeConsent,
  };
}