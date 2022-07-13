import { Chip } from '@mui/material';
import Slider from 'react-slick';
import styled from 'styled-components';

export interface MainSheetSliderProps {}

const MyChip = styled(Chip)`
    width: 100px !important;
`;

const MainSheetSlider = (props: MainSheetSliderProps): JSX.Element => {
    return (
        <Slider slidesToShow={3}>
            <MyChip label="1" />
            <MyChip label="2" />
            <MyChip label="3" />
            <MyChip label="4" />
            <MyChip label="5" />
            <MyChip label="6" />
            <MyChip label="8" />
            <MyChip label="9" />
            <MyChip label="10" />
        </Slider>
    );
};

export default MainSheetSlider;
