'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GA_TRACKING_ID = 'G-74Q8HLBVL9';

export default function GoogleAnalytics() {
  useEffect(() => {
    // 检查是否已经初始化过
    if (window.gtag) {
      return;
    }

    // 初始化dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // 定义gtag函数
    window.gtag = function (...args: any[]) {
      window.dataLayer.push(args);
    };

    // 设置默认同意状态（拒绝所有）
    window.gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });

    // 动态加载GA脚本
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // 初始化GA
      window.gtag!('js', new Date());
      window.gtag!('config', GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });

      // 检查用户之前的同意状态
      const consent = localStorage.getItem('cookieConsent');
      if (consent === 'accepted') {
        // 用户之前同意过，更新同意状态
        window.gtag!('consent', 'update', {
          'ad_storage': 'granted',
          'analytics_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted'
        });
      } else if (consent === 'rejected') {
        // 用户之前拒绝过，只允许基本分析
        window.gtag!('consent', 'update', {
          'ad_storage': 'denied',
          'analytics_storage': 'granted', // 基本分析仍然允许
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        });
      }
    };
  }, []);

  return null;
}
