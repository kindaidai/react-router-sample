import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';
import {
  getLinkStyles,
  TypographyHeadlineDesktop
} from '@tablecheck/tablekit-typography';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';

export const GRID_MARGIN = Spacing.L4;
export const GRID_DESKTOP_MAX_WIDTH = '74em';

export const TOPNAV_HEIGHT = '72px';
export const pageTransitionEasing = 'cubic-bezier(0.23, 1, 0.32, 1)'; // easeOutQuint
export const commonTransition = `all ${pageTransitionEasing} 0.5s`;

export const slideUp = keyframes`
  from { transform: translate3d(0, 100vh, 0); }
  to { translate3d(0, 0, 0); }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

/* Breakpoints */
// mobile: 20rem (320px) - 47.938rem (767px)
// tablet: 48rem (768px) - 63.938rem (1023px)
// desktop: 64rem (1024px) - ∞
export const BREAKPOINTS = {
  // The default scope is for mobile
  tablet: '48rem', // @media (min-width: ${BREAKPOINTS.tablet})
  desktop: '64rem' // @media (min-width: ${BREAKPOINTS.desktop})
};

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PageWrapper = styled.div`
  width: 100%;
  padding-left: ${GRID_MARGIN};
  padding-right: ${GRID_MARGIN};
  max-width: ${GRID_DESKTOP_MAX_WIDTH};
  margin: 0 auto;
  flex: 1 0 auto;
  animation: ${fadeIn} ${pageTransitionEasing} 0.5s;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    flex-direction: row;
  }
`;

export const Headline = styled.h1`
  ${TypographyHeadlineDesktop.Heading1};
  margin: ${Spacing.L6} 0;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    ${TypographyHeadlineDesktop.Headline};
  }
`;

export const PageImage = styled.img`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: ${Spacing.L5} ${GRID_MARGIN};

  @media (min-width: ${BREAKPOINTS.tablet}) {
    max-width: 50%;
    margin-left: ${Spacing.L8};
  }
`;

export const PageLink = styled(Link)`
  ${getLinkStyles};
`;
