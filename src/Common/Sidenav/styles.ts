import styled from '@emotion/styled';
import { Button } from '@tablecheck/tablekit-button';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { Panel } from '@tablecheck/tablekit-panel';
import { Spacing } from '@tablecheck/tablekit-theme';

import { BREAKPOINTS, GRID_MARGIN } from 'styles';

export const SidenavWrapper = styled(Panel)`
  padding: ${GRID_MARGIN};
`;

export const SidenavItems = styled(ItemGroup)`
  padding-top: ${Spacing.L6};
`;

export const CloseButton = styled(Button)`
  position: absolute;
  right: ${GRID_MARGIN};
`;

export const MobileOnlyItems = styled.div`
  @media (min-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;
