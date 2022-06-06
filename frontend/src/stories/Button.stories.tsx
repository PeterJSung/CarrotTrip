import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Button } from '@mui/material';
import { action, actions } from '@storybook/addon-actions';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const button = () => {
  return <Button onClick={action('test')}>Test</Button>
}