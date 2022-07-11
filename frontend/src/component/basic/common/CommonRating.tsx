import { Rating, RatingProps } from '@mui/material';
import { YELLOW_COLOR } from 'globaltheme';
import styled from 'styled-components';

const YellowColorRating = styled(Rating)`
    & .MuiRating-iconFilled {
        color: ${YELLOW_COLOR} !important;
    }
`;

const CommonRating = (props: RatingProps): JSX.Element => {
    return <YellowColorRating {...props} />;
};

export default CommonRating;
