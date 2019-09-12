import * as React from 'react';
import {css, Global} from '@emotion/core';
import Helmet from 'react-helmet';
import {SiteBody} from './SiteBody';
import {Sidebar} from './sidebar';
import {SiteHeader} from './SiteHeader';
import {ActiveSiteThemeProvider} from '../../context/ActiveSiteThemeContext';
import {SiteMain, SiteMainInner} from './SiteMain';
import {SiteFooter} from './SiteFooter';
import {ScrollAnchorIntoView} from './ScrollAnchorIntoView';
import {SiteThemeProvider} from './SiteThemeProvider';

const globalStyles = css`
  body {
    margin: 0;
  }
`;

const SiteWrapper: React.FC = ({children}) => {
  return (
    <ActiveSiteThemeProvider>
      <SiteThemeProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="//cloud.typography.com/6230892/752864/css/fonts.css" />
        </Helmet>
        <Global styles={globalStyles} />
        <SiteBody>
          <Sidebar />
          <SiteHeader />
          <SiteMain>
            <ScrollAnchorIntoView />
            <SiteMainInner>{children}</SiteMainInner>
            <SiteFooter />
          </SiteMain>
        </SiteBody>
      </SiteThemeProvider>
    </ActiveSiteThemeProvider>
  );
};

export {SiteWrapper};
