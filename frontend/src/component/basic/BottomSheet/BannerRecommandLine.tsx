import { Box } from '@mui/material';
import { reAdjustmantKMnM } from 'common/util';
import styled from 'styled-components';

export interface BannerRecommandLineProps {
    distanceText: number;
}

const RunIcon = (): JSX.Element => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.8332 5.00008C11.7536 5.00008 12.4998 4.25389 12.4998 3.33341C12.4998 2.41294 11.7536 1.66675 10.8332 1.66675C9.9127 1.66675 9.1665 2.41294 9.1665 3.33341C9.1665 4.25389 9.9127 5.00008 10.8332 5.00008Z"
            fill="black"
        />
        <path
            d="M11.6484 10.2249C11.8526 10.5316 12.1576 10.7641 12.5076 10.8808L14.7367 11.6241L15.2642 10.0441L13.0351 9.30075L11.6492 7.22159C11.488 6.98087 11.2672 6.78595 11.0084 6.65575L9.8134 6.05825C9.45789 5.88052 9.05035 5.83645 8.66507 5.93409L6.00423 6.59825C5.77068 6.65644 5.55249 6.76447 5.36463 6.91493C5.17677 7.06539 5.02369 7.25472 4.9159 7.46992L3.4209 10.4608L4.91173 11.2066L6.40673 8.21575L8.25923 7.75242L6.7559 14.7074L3.69423 16.8133L4.6384 18.1866L7.7009 16.0799C8.05173 15.8383 8.29507 15.4758 8.38423 15.0591L8.81507 13.0691L10.9126 14.6424L11.6834 18.4966L13.3176 18.1691L12.5467 14.3133C12.4658 13.9116 12.2397 13.5538 11.9117 13.3083L10.1026 11.9516L10.6417 8.71409L11.6484 10.2249Z"
            fill="black"
        />
    </svg>
);

const DistanceTypo = styled.span`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #000000;
`;

const VerticalLine = styled.span`
    border-left: 3px dotted black;
    height: 100%;
    margin-left: 1.937rem;
    margin-right: 1rem;
`;

const BannerRecommandLine = (props: BannerRecommandLineProps): JSX.Element => {
    const { dist, unit } = reAdjustmantKMnM(props.distanceText);
    return (
        <Box display="flex" height="3.375rem">
            <VerticalLine />
            <Box display="flex" alignItems="center">
                <RunIcon />
                <DistanceTypo>{`${dist}${unit}`}</DistanceTypo>
            </Box>
        </Box>
    );
};

export default BannerRecommandLine;
