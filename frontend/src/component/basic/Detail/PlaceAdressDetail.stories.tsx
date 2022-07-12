import { ComponentMeta } from '@storybook/react';

import PlaceAdressDetail from './PlaceAdressDetail';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/Detail/PlaceAdressDetail',
    component: PlaceAdressDetail,
} as ComponentMeta<typeof PlaceAdressDetail>;

export const placeAdressDetail = () => <PlaceAdressDetail adressText="서울특별시 가나다 마바사 아자차 카타파하" />;
