import { ordered as orderedLocales } from '@tablecheck/locales';
import { useTranslation } from 'react-i18next';
import {
  Navigate,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import { PageLayout } from 'Common/Page';
import { Home } from 'Pages/Home';
import { Shops, loader as shopsLoader } from 'Pages/Shops';

export const SUPPORTED_LOCALES = orderedLocales.map(({ code }) => code);

export function Router({
  isDarkMode,
  setDarkMode
}: {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}): JSX.Element {
  const [, { language }] = useTranslation();
  // react router v6 not accepting regex on path yet
  // https://github.com/remix-run/react-router/issues/8254
  // const localePath = `:locale(${SUPPORTED_LOCALES.join('|')})`;

  const router = createBrowserRouter([
    {
      path: '/:locale',
      element: <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode} />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'shops',
          element: <Shops />,
          loader: shopsLoader
        }
      ]
    },
    {
      path: '*',
      element: <Navigate to={`/${language}`} replace />
    }
  ]);

  return <RouterProvider router={router} />;
}
