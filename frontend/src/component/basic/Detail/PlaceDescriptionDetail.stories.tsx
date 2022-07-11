import { ComponentMeta } from '@storybook/react';

import PlaceDescriptionDetail from './PlaceDescriptionDetail';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/Detail/PlaceDescriptionDetail',
    component: PlaceDescriptionDetail,
} as ComponentMeta<typeof PlaceDescriptionDetail>;

export const placeDescriptionDetail = () => (
    <PlaceDescriptionDetail
        placeType="Type"
        placeName="이것은 장소이름"
        placeDesc="이것은 장소설명입니다 장소 이름보다 조금 더 긴 텍스트를 가지고있습니다"
    />
);
