import styled from '@emotion/styled';
import themeGet from '@styled-system/theme-get';
import css from '@styled-system/css';

export const StyledLink = styled.a(props => {
  console.log(props);
  return css({
    color: 'colorTextLink',
    textDecoration: 'none',
    outline: 'none',

    '&:hover': {
      color: 'colorTextLinkHover',
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
  });
});
