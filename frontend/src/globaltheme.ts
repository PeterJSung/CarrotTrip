import { createTheme } from '@mui/material';

export const YELLOW_COLOR = '#FEF32F';
export const WHITE_COLOR = '#f3f5f7';
export const BLACK_COLOR = '#191919';
export const GRAY_COLOR = '#6d6d6d';

const globalTheme = createTheme({
    palette: {
        secondary: {
            main: YELLOW_COLOR,
        },
        info: {
            main: WHITE_COLOR,
        },
    },
});

export default globalTheme;
