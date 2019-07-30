import styled from '@emotion/styled';
import themeGet from '@styled-system/theme-get';

export const StyledLink = styled.a(props => ({
  color: themeGet('textColors.colorTextLink')(props),
  textDecoration: 'none',
  outline: 'none',

  '&:hover': {
    color: themeGet('textColors.colorTextLinkHover')(props),
    textDecoration: 'underline',
  },

  '&:focus, &:active': {
    boxShadow: '0 0 0 4px rgba(0, 117, 195, 0.5)',
    textDecoration: 'underline',
  },

  '&:focus': {
    color: themeGet('textColors.colorTextLinkFocus')(props),
  },

  '&:active': {
    color: themeGet('textColors.colorTextLinkActive')(props),
  },
}));
