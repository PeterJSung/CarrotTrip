import { ComponentMeta } from '@storybook/react';
import MBTIChip from './MBTIChip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/Detail/MBTIChip',
    component: MBTIChip,
} as ComponentMeta<typeof MBTIChip>;

export const mBTIChip = () => <MBTIChip type="INTJ" score={3} />;
