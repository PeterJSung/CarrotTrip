import { ThemeProvider } from '@mui/material/styles';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';
import Globalstyle from '../src/globalstyle';
import globaltheme from '../src/globaltheme';
import '../src/i18n';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const genKey = function () {
  let ret = 0;
  return function () {
    return ++ret
  }
}()

export const decorators = [
  (Story) => React.createElement(ThemeProvider, { theme: globaltheme }, [
      React.createElement(Globalstyle, { key: genKey() }),
      React.createElement(Story, { key: genKey() })
  ]),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphonex"
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}