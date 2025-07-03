import { RouteObject } from 'react-router-dom';
import MultipleAccountsPage from './pages/MultipleAccountsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MultipleAccountsPage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '/terms-of-use',
    element: <TermsOfUsePage />,
  },
  // 可在此添加更多页面
];

export default routes; 