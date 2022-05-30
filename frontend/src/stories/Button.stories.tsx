import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Button } from '@mui/material';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const button = () => <Button>Test</Button>;