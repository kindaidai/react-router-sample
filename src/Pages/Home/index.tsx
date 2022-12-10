import { Input } from '@tablecheck/tablekit-input';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import { HomeHeadline, HomeWrapper, SearchWrapper, SearchForm } from './styles';

export function Home(): JSX.Element {
  const [t, { language }] = useTranslation();

  return (
    <HomeWrapper>
      <HomeHeadline>{t('attributes.titles.headline')}</HomeHeadline>
      <Outlet />
      <Helmet>
        <title lang={language}>{`${t('attributes.titles.headline')} - ${t(
          'keywords.app_name'
        )}`}</title>
      </Helmet>
      <SearchWrapper>
        <SearchForm role="search">
          <Input
            label="Search"
            type="search"
            placeholder="Search"
            name="text"
            shouldFitContainer
          />
        </SearchForm>
      </SearchWrapper>
    </HomeWrapper>
  );
}
