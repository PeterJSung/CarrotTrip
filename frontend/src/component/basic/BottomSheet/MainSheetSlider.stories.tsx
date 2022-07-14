import { Box, Typography } from '@mui/material';
import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';

import MainSheetSlider from './MainSheetSlider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic/BottomSheet/MainSheetSlider',
    component: MainSheetSlider,
} as ComponentMeta<typeof MainSheetSlider>;

export const mainSheetSlider = () => (
    <>
        <Box width="15rem" border="solid 0.2rem black">
            <MainSheetSlider onClick={action(`Suggestion Click`)} />
        </Box>
        <Typography fontSize={2}>이 컴포넌트의 스크롤은 모바일에서만 됩니다. 시간이없어서.. 죄송 ㅠㅠ</Typography>
        <Typography fontSize={2}>
            PC 에서 하고싶다면 https://jamesdreaming.tistory.com/108 이링크를 참조 (Ctrl + shift + M)
        </Typography>
    </>
);
