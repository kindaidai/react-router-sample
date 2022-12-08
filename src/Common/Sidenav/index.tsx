import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { ordered } from '@tablecheck/locales';
import { ButtonAppearance } from '@tablecheck/tablekit-button';
import { Icon } from '@tablecheck/tablekit-icon';
import { Item } from '@tablecheck/tablekit-item';
import { LanguageSelector, View } from '@tablecheck/tablekit-language-selector';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { tciSun } from 'tablecheck-icons/tciSun';

import {
  MobileOnlyItems,
  CloseButton,
  SidenavItems,
  SidenavWrapper
} from './styles';

export function Sidenav({
  isOpen,
  setOpen,
  isDarkMode,
  setDarkMode,
  changeLanguage
}: {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
  changeLanguage: (locale: string) => void;
}): JSX.Element | null {
  const [t, { language }] = useTranslation();

  const onOutsideClickPanel = React.useCallback(
    (event: MouseEvent) => {
      const button = document.querySelector('#button-left');
      if (!button?.contains(event.target as Node)) {
        setOpen(false);
      }
    },
    [setOpen]
  );

  const currentLocale = ordered.find((locale) => locale.code === language);

  if (!language || !ordered) return null;

  return (
    <SidenavWrapper
      isOpen={isOpen}
      togglePanel={() => setOpen(false)}
      width="300px"
      onClickOutside={onOutsideClickPanel}
    >
      <CloseButton
        onClick={() => setOpen(!isOpen)}
        appearance={ButtonAppearance.Subtle}
        iconBefore={<Icon icon={faTimes} />}
      />
      <SidenavItems>
        <MobileOnlyItems>
          <Item
            elemBefore={<Icon icon={tciSun} />}
            onClick={() => {
              setDarkMode(!isDarkMode);
              setOpen(false);
            }}
          >
            {t('actions.toggle_theme')}
          </Item>
          <LanguageSelector
            currentLanguage={language}
            locales={ordered}
            shouldShowCloseIcon
            view={View.Mobile}
            itemWidth="100%"
            onChangeLanguage={changeLanguage}
            renderTrigger={({ onClick, ref }) => (
              <Item
                onClick={onClick}
                ref={ref}
                elemBefore={<Icon icon={faGlobe} />}
              >
                {currentLocale?.label}
              </Item>
            )}
          />
        </MobileOnlyItems>
      </SidenavItems>
    </SidenavWrapper>
  );
}
