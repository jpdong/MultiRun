import { RouteObject } from 'react-router-dom';
import MultipleAccountsPage from './pages/MultipleAccountsPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MultipleAccountsPage />,
  },
  // 可在此添加更多页面
];

export default routes; 