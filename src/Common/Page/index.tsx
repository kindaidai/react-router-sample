import { Outlet } from 'react-router-dom';

import { TopNav } from 'Common/TopNav';

export function PageLayout({
  isDarkMode,
  setDarkMode
}: {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}): JSX.Element {
  return (
    <>
      <TopNav isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <Outlet />
    </>
  );
}
