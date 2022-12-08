import { CLASSIC_COLORS, DARK_COLORS } from '@tablecheck/tablekit-theme';

import { AppTheme } from '../types';

export const defaultTheme: AppTheme = {
  classic: {
    colors: {
      ...CLASSIC_COLORS
    }
  },
  dark: {
    colors: {
      ...DARK_COLORS
    }
  }
};
