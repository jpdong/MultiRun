import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MultipleAccountsPage from './pages/MultipleAccountsPage';
import CookieConsent from './components/elements/CookieConsent';

const App: React.FC = () => (
  <Router>
    <CookieConsent />
    <Routes>
      <Route path="/" element={<MultipleAccountsPage />} />
    </Routes>
  </Router>
);

export default App; 