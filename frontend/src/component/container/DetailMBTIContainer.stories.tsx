import { ComponentMeta } from '@storybook/react';

import DetailMBTIContainer from './DetailMBTIContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Container/DetailMBTIContainer',
    component: DetailMBTIContainer,
} as ComponentMeta<typeof DetailMBTIContainer>;

export const detailMBTIContainer = () => <DetailMBTIContainer />;
