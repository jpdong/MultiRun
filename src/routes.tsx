import { RouteObject } from 'react-router-dom';
import MultipleAccountsPage from './pages/MultipleAccountsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import ContactUsPage from './pages/ContactUsPage';
import RankPage from './pages/RankPage';

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
  {
    path: '/contact',
    element: <ContactUsPage />,
  },
  {
    path: '/rank',
    element: <RankPage />,
  },
  // 可在此添加更多页面
];

export default routes; 