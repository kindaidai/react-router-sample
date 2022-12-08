import { ordered as orderedLocales } from '@tablecheck/locales';
import { useTranslation } from 'react-i18next';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PageLayout } from 'Common/Page';
import { Home } from 'Pages/Home';

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

  return (
    <Routes>
      <Route
        path="/:locale"
        element={
          <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
        }
      >
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to={`/${language}`} replace />} />
    </Routes>
  );
}
