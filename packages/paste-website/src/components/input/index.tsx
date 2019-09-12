import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Box} from '@twilio-paste/box';

export const StyledBox = styled(Box)`
  font-family: inherit;
  font-size: ${themeGet('fontSizes.fontSize20')};
  line-height: ${themeGet('lineHeights.lineHeight')};
  overflow: visible;
  width: 100%;
`;

// TODO: replace TS 'any' with real value
export const Input: React.FC<any> = props => {
  return (
    <StyledBox
      as="input"
      m="space0"
      p="space30"
      borderColor="colorBorder"
      borderRadius="borderRadius20"
      borderStyle="solid"
      borderWidth="borderWidth10"
      {...props}
    />
  );
};
