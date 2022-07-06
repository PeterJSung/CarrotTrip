import { createTheme } from '@mui/material';

export const YELLOW_COLOR = '#FEF32F';
export const BLACK_COLOR = '#f3f5f7';

const globalTheme = createTheme({
    palette: {
        secondary: {
            main: YELLOW_COLOR,
        },
        info: {
            main: BLACK_COLOR,
        },
    },
});

export default globalTheme;
