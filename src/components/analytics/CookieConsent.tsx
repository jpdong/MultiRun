'use client';

import { useEffect, useState } from 'react';

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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 z-[9999] w-[calc(100%-2rem)] sm:w-auto max-w-md bg-white rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] border border-gray-100 py-3 px-4 flex items-center justify-between gap-4 animate-[fadeInUp_0.3s_ease-out]">
      <div className="flex items-center gap-3">
        <span className="text-2xl select-none" role="img" aria-label="cookie">🍪</span>
        <div className="flex flex-col gap-0.5">
          <span className="font-semibold text-gray-900 text-sm leading-snug">
            This website uses cookies.
          </span>
          <a
            href="/privacy-policy"
            className="text-xs text-gray-600 underline underline-offset-2 hover:text-gray-900 transition-colors font-medium w-fit"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <button
          onClick={acceptCookies}
          className="bg-primary hover:bg-primary-hover text-white font-medium text-sm px-5 py-2 rounded-full shadow-sm hover:shadow-md hover:shadow-primary/20 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          Accept
        </button>
        <button
          onClick={rejectCookies}
          className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-full transition-all duration-200 cursor-pointer"
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
