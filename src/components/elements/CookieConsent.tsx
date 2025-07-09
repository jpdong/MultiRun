"use client"
import { useEffect, useState } from 'react';

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (!storedConsent || storedConsent != 'accepted') {
      setShowBanner(true);
      return;
    }
    
    setConsent(storedConsent);
     window.dataLayer = window.dataLayer || [];
      
      // Define gtag function on window object
      window.gtag = function(...args: any[]) {
        window.dataLayer.push(args);
      };
      
      window.gtag('js', new Date());
      window.gtag('config', 'G-74Q8HLBVL9');
    // If user previously accepted, initialize GA
    if (storedConsent === 'accepted') {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    } else {
      window.gtag('consent', 'update', {
        'ad_storage': 'denied',
        'analytics_storage': 'granted',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Initialize GA
    window.dataLayer = window.dataLayer || [];
    
    // Define gtag function on window object
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(args);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', 'G-74Q8HLBVL9');
    
    window.gtag('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    });
    
    setConsent('accepted');
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
    
    // Define gtag function if not already defined
    if (!window.gtag) {
      window.gtag = function(...args: any[]) {
        window.dataLayer.push(args);
      };
    }
    
    window.gtag('consent', 'update', {
      'ad_storage': 'denied',
      'analytics_storage': 'granted',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });
    
    setConsent('rejected');
  };

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
    }}>
      <span>This website uses cookies for analytics and ad personalization. Please agree to our collection of your data to improve your experience</span>
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