import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes';
import CookieConsent from './components/elements/CookieConsent';

const AppContent: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};

const App: React.FC = () => (
  <Router>
    <CookieConsent />
    <AppContent />
  </Router>
);

export default App; 