import { Theme } from '@emotion/react';

export interface AppTheme {
  classic: Partial<Theme> & { colors: Theme['colors'] };
  dark: Partial<Theme> & { colors: Theme['colors'] };
}
