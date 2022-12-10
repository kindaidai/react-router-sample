import styled from '@emotion/styled';
import { Form } from 'react-router-dom';

import { Headline, PageWrapper, pageTransitionEasing, slideUp } from 'styles';

export const HomeWrapper = styled(PageWrapper)`
  max-width: initial;
  animation: ${slideUp} ${pageTransitionEasing} 0.5s;
`;

export const HomeHeadline = styled(Headline)`
  text-align: center;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchForm = styled(Form)`
  flex-basis: 400px;
`;
