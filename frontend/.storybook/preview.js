import React from 'react'
import Globalstyle from '../src/globalstyle'

export const decorators = [
  (Story) => React.createElement(React.Fragment,[],[
    React.createElement(Globalstyle),
    React.createElement(Story)
  ]),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}