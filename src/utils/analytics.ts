// Google Analytics 辅助函数

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// 发送页面浏览事件
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-74Q8HLBVL9', {
      page_location: url,
    });
  }
};

// 发送自定义事件
export const event = (action: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, parameters);
  }
};

// 测试GA是否正常工作
export const testGA = () => {
  if (typeof window !== 'undefined') {
    console.log('Testing Google Analytics...');
    console.log('dataLayer:', window.dataLayer);
    console.log('gtag function:', typeof window.gtag);
    
    // 发送测试事件
    if (window.gtag) {
      window.gtag('event', 'test_event', {
        event_category: 'engagement',
        event_label: 'manual_test',
        value: 1
      });
      console.log('Test event sent to GA');
    } else {
      console.log('GA not initialized yet');
    }
  }
};
