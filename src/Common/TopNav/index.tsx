import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { ordered } from '@tablecheck/locales';
import { Button, ButtonAppearance } from '@tablecheck/tablekit-button';
import { Icon } from '@tablecheck/tablekit-icon';
import { View } from '@tablecheck/tablekit-language-selector';
import { LogoSymbol } from '@tablecheck/tablekit-logo';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { tciSun } from 'tablecheck-icons/tciSun';

import { getI18nextInstance } from 'i18n';

import { Sidenav } from 'Common/Sidenav';

import {
  DesktopOnlyItems,
  LangSelectorButton,
  LanguageSelectorWrapper,
  LogoWording,
  LogoWrapper,
  MenuButton,
  TopNavContent,
  TopNavWrapper
} from './styles';
import { MobileOnlyItems } from 'Common/Sidenav/styles';

export function TopNav({
  isDarkMode,
  setDarkMode
}: {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}): JSX.Element | null {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const i18next = getI18nextInstance();
  const navigate = useNavigate();
  const [t, { language }] = useTranslation();
  const location = useLocation();
  const currentLocale = ordered.find((locale) => locale.code === language);

  if (!i18next || !language || !ordered) return null;

  const changeLanguage = (locale: string) => {
    let parts = location.pathname.split('/');
    parts = parts.splice(2);
    const page = `/${locale}/${parts.join('/')}`;

    navigate(page, { replace: true });
    i18next.changeLanguage(locale);
  };

  return (
    <TopNavWrapper>
      <TopNavContent>
        <LogoWrapper to={`/${language}`}>
          <LogoSymbol size="24px" />
          <LogoWording>{t('keywords.app_name')}</LogoWording>
        </LogoWrapper>
        <div style={{ display: 'flex' }}>
          <DesktopOnlyItems>
            <Button
              appearance={ButtonAppearance.Subtle}
              iconBefore={<Icon icon={tciSun} />}
              onClick={() => setDarkMode(!isDarkMode)}
            />
            <LanguageSelectorWrapper
              currentLanguage={language}
              locales={ordered}
              shouldShowCloseIcon
              view={View.Desktop}
              onChangeLanguage={changeLanguage}
              renderTrigger={({ onClick, ref }) => (
                <LangSelectorButton
                  onClick={onClick}
                  ref={ref}
                  appearance={ButtonAppearance.Subtle}
                  iconBefore={<Icon icon={faGlobe} />}
                >
                  {currentLocale?.label}
                </LangSelectorButton>
              )}
            />
          </DesktopOnlyItems>
          <MobileOnlyItems>
            <MenuButton
              onClick={() => setMenuOpen(!isMenuOpen)}
              appearance={ButtonAppearance.Subtle}
              iconBefore={<Icon icon={faBars} />}
            />
          </MobileOnlyItems>
        </div>
      </TopNavContent>
      <Sidenav
        isOpen={isMenuOpen}
        setOpen={setMenuOpen}
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
        changeLanguage={changeLanguage}
      />
    </TopNavWrapper>
  );
}
