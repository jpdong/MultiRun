'use client';

import { useEffect, useState } from 'react';
import styles from './CookieConsent.module.css';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // 检查用户是否已经做过选择
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);

    // 更新Google Analytics同意状态
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    }
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);

    // 更新Google Analytics同意状态（只允许基本分析）
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'denied',
        'analytics_storage': 'granted', // 基本分析仍然允许
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div role="region" aria-label="Cookie preferences" className={styles.banner}>
      <div className={styles.content}>
        <span className={styles.icon} role="img" aria-label="cookie">🍪</span>
        <div className={styles.message}>
          <span className={styles.text}>
            This website uses cookies.
          </span>
          <a
            href="/privacy-policy"
            className={styles.learnMore}
          >
            Learn more
          </a>
        </div>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          onClick={acceptCookies}
          className={styles.accept}
        >
          Accept
        </button>
        <button
          type="button"
          onClick={rejectCookies}
          className={styles.close}
          aria-label="Close cookie consent banner"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
