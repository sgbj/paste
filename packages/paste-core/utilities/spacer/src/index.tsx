import styled from '@emotion/styled';
import {space} from 'styled-system';
import {ThemeShape} from '@twilio-paste/theme-tokens';

interface MarginProps {
  m?: keyof ThemeShape['space'];
  margin?: keyof ThemeShape['space'];
  mt?: keyof ThemeShape['space'];
  marginTop?: keyof ThemeShape['space'];
  mr?: keyof ThemeShape['space'];
  marginRight?: keyof ThemeShape['space'];
  mb?: keyof ThemeShape['space'];
  marginBottom?: keyof ThemeShape['space'];
  ml?: keyof ThemeShape['space'];
  marginLeft?: keyof ThemeShape['space'];
  mx?: keyof ThemeShape['space'];
  my?: keyof ThemeShape['space'];
}

interface PaddingProps {
  p?: keyof ThemeShape['space'];
  padding?: keyof ThemeShape['space'];
  pt?: keyof ThemeShape['space'];
  paddingTop?: keyof ThemeShape['space'];
  pr?: keyof ThemeShape['space'];
  paddingRight?: keyof ThemeShape['space'];
  pb?: keyof ThemeShape['space'];
  paddingBottom?: keyof ThemeShape['space'];
  pl?: keyof ThemeShape['space'];
  paddingLeft?: keyof ThemeShape['space'];
  px?: keyof ThemeShape['space'];
  py?: keyof ThemeShape['space'];
}

interface SpacerProps extends MarginProps, PaddingProps {}

const Spacer = styled.div<SpacerProps>`
  display: inline;
  ${space};
`;

Spacer.defaultProps = {};

Spacer.displayName = 'Spacer';

export {Spacer};
