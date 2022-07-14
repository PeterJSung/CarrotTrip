import { Box } from '@mui/material';
import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { getDummyState } from 'stories/common.stories';
import WithMock from 'storybook-addon-mock';
import KakaoMapBottomSheetContainer from './KakaoMapBottomSheetContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Container/KakaoMapBottomSheetContainer',
    component: KakaoMapBottomSheetContainer,
    decorators: [(story) => getDummyState(story()), WithMock],
} as ComponentMeta<typeof KakaoMapBottomSheetContainer>;

export const kakaoMapBottomSheetContainer = () => (
    <Box height="100%" bgcolor="cyan">
        <KakaoMapBottomSheetContainer mode="SUGGESTION" open={true} setOpen={action('Open Handler')} />
    </Box>
);
