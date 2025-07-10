"use client"
import { useEffect, useState } from 'react';

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

// 添加GA脚本加载函数
const loadGAScript = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-74Q8HLBVL9';
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (!storedConsent) {
      setShowBanner(true);
    } else {
      setConsent(storedConsent);
    }
  }, []);

  // 统一GA初始化函数
  const initializeGA = async () => {
    try {
      // 确保dataLayer存在
      window.dataLayer = window.dataLayer || [];

      // 定义gtag函数
      window.gtag = function (...args: any[]) {
        window.dataLayer.push(args);
      };

      // 加载GA脚本
      await loadGAScript();

      // 初始化GA配置
      window.gtag('js', new Date());
      window.gtag('config', 'G-74Q8HLBVL9');

      // 设置同意状态
      window.gtag('consent', 'update', {
        'ad_storage': consent === 'accepted' ? 'granted' : 'denied',
        'analytics_storage': 'granted',
        'ad_user_data': consent === 'accepted' ? 'granted' : 'denied',
        'ad_personalization': consent === 'accepted' ? 'granted' : 'denied'
      });
    } catch (error) {
      console.error('Failed to initialize Google Analytics:', error);
    }
  };

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    setConsent('accepted');
    initializeGA();
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
    setConsent('rejected');
    initializeGA();
  };
  useEffect(() => {
    if (consent) {
      initializeGA();
    }
  }, [consent]);

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#fff',
      padding: '20px',
      boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <span style={{ maxWidth: '70%' }}>This website uses cookies for analytics and ad personalization. Please agree to our collection of your data to improve your experience</span>
      <div>
        <button
          onClick={acceptCookies}
          style={{
            marginRight: '10px',
            backgroundColor: '#165DFF',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          Agree
        </button>
        <button
          onClick={rejectCookies}
          style={{
            backgroundColor: '#f5f5f5',
            color: '#333',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          Necessary
        </button>
      </div>
    </div>
  );
}