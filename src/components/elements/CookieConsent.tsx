import React, { useEffect, useState } from 'react';

const COOKIE_KEY = 'cookieConsent';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
    // 若已同意，初始化GA
    if (consent === 'accepted') {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
      gtag('js', new Date());
      gtag('config', 'G-73VJ83N7ZR');
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
      window.gtag('js', new Date());
      window.gtag('config', 'G-73VJ83N7ZR');
    }
  };

  const rejectAll = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    setVisible(false);
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    }
  };

  if (!visible) return null;
  return (
    <div style={{position:'fixed',bottom:0,left:0,right:0,background:'#fff',padding:20,boxShadow:'0 -2px 8px rgba(0,0,0,0.1)',zIndex:9999,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <span>This website uses cookies for analytics and ad personalization. Please agree to our collection of your data to improve your experience.</span>
      <div>
        <button onClick={acceptAll} style={{marginRight:10,backgroundColor:'#165DFF',color:'white',border:'none',padding:'10px 20px',borderRadius:8,cursor:'pointer',boxShadow:'0 2px 4px rgba(0,0,0,0.1)',transition:'all 0.3s'}}>Agree All</button>
        <button onClick={rejectAll} style={{backgroundColor:'#f5f5f5',color:'#333',border:'none',padding:'10px 20px',borderRadius:8,cursor:'pointer',boxShadow:'0 2px 4px rgba(0,0,0,0.1)',transition:'all 0.3s'}}>Only allow necessary</button>
      </div>
    </div>
  );
};

export default CookieConsent; 