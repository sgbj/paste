import * as React from 'react';
import {Theme} from '@twilio-paste/theme';
import {DefaultTheme} from '@twilio-paste/theme-tokens';

const withThemeProvider = storyFn => (
  <Theme.Provider theme={DefaultTheme} customBreakpoints={[]}>
    {storyFn()}
  </Theme.Provider>
);

export {withThemeProvider};
