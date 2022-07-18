import { Box } from '@mui/material';
import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import WithMock from 'storybook-addon-mock';
import BottomSheetPlaceDetailContainer from './BottomSheetPlaceDetailContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Container/BottomSheetPlaceDetailContainer',
    component: BottomSheetPlaceDetailContainer,
    decorators: [(story) => getDummyState(story()), WithMock],
} as ComponentMeta<typeof BottomSheetPlaceDetailContainer>;

export const bottomSheetPlaceDetailContainer = () => (
    <Box height="100%" bgcolor="cyan">
        <BottomSheetPlaceDetailContainer />
    </Box>
);
