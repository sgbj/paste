import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select} from '@storybook/addon-knobs';
import {DefaultTheme, ThemeShape} from '@twilio-paste/theme-tokens';
import {Text} from '@twilio-paste/text';
import {Spacer} from '../src';

const spaceOptions = Object.keys(DefaultTheme.space);

storiesOf('Utilities|Spacer', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const paddingValue = select('padding', spaceOptions, '') as keyof ThemeShape['space'];
    const marginValue = select('margin', spaceOptions, '') as keyof ThemeShape['space'];

    return (
      <>
        <Text as="span">A</Text>
        <Spacer m={marginValue} p={paddingValue} />
        <Text as="span">B</Text>
      </>
    );
  });
