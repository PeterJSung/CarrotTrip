import React from 'react'
import Globalstyle from '../src/globalstyle'

const genKey = function () {
  let ret = 0;
  return function () {
    return ++ret
  }
}()

export const decorators = [
  (Story) => React.createElement(React.Fragment, [], [
    React.createElement(Globalstyle, { key: genKey() }),
    React.createElement(Story, { key: genKey() })
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