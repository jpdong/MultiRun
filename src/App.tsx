import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MultipleAccountsPage from './pages/MultipleAccountsPage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MultipleAccountsPage />} />
    </Routes>
  </Router>
);

export default App; 