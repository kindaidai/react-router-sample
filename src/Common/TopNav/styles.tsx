import styled from '@emotion/styled';
import { Button } from '@tablecheck/tablekit-button';
import { LanguageSelector as TKLanguageSelector } from '@tablecheck/tablekit-language-selector';
import { Spacing } from '@tablecheck/tablekit-theme';
import { Link } from 'react-router-dom';

import { BREAKPOINTS, GRID_MARGIN, TOPNAV_HEIGHT } from 'styles';

export const TopNavWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  min-height: ${TOPNAV_HEIGHT};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopNavContent = styled.div`
  width: 100%;
  padding: 0 ${GRID_MARGIN};
  display: flex;
  justify-content: space-between;
`;

export const DesktopOnlyItems = styled.div`
  display: none;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    display: block;
  }
`;

export const LanguageSelectorWrapper = styled(TKLanguageSelector)`
  display: inline-block;
  width: initial;
`;

export const LangSelectorButton = styled(Button)`
  width: fit-content;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const LogoWording = styled.span`
  color: ${({ theme }) => theme.colors.text};
  margin-left: ${Spacing.L2};
  font-size: 20px;
  font-weight: 500;
`;

export const MenuButton = styled(Button)`
  @media (min-width: ${BREAKPOINTS.tablet}) {
    margin-left: ${Spacing.L4};
  }
`;
