import React, { useEffect, useState } from 'react';
import { Button, Typography, Space, Card, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Footer } = Layout;
const COOKIE_KEY = 'cookieConsent';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const initGoogleAnalytics = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
    
    if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-74Q8HLBVL9';
      script.async = true;
      document.head.appendChild(script);
    }
    
    gtag('js', new Date());
    gtag('config', 'G-74Q8HLBVL9');
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    });
  };

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    } else if (consent === 'accepted') {
      initGoogleAnalytics();
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
    initGoogleAnalytics();
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
    <Footer style={{ position: 'fixed', bottom: 0, width: '100%', padding: 0, zIndex: 1000 }}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography.Text style={{ flex: '1 1 300px', minWidth: '300px', marginRight: '1rem' }}>
            This website uses cookies for analytics and ad personalization. Please agree to our collection of your data to improve your experience. Read our <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/terms-of-use">Terms of Use</Link>.
          </Typography.Text>
          <Space wrap style={{ flex: '0 0 auto' }}>
            <Button type="primary" onClick={acceptAll}>
              Agree All
            </Button>
            <Button onClick={rejectAll}>
              Only allow necessary
            </Button>
          </Space>
        </div>
      </Card>
    </Footer>
  );
};

export default CookieConsent;