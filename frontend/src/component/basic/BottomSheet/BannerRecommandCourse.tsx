import { Box } from '@mui/material';
import { reAdjustmantKMnM } from 'common/util';
import { SyntheticEvent } from 'react';
import styled from 'styled-components';
import CommonSheetBanner from './CommonSheetBanner';

const RunIcon = (): JSX.Element => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.8332 4.99996C11.7536 4.99996 12.4998 4.25377 12.4998 3.33329C12.4998 2.41282 11.7536 1.66663 10.8332 1.66663C9.9127 1.66663 9.1665 2.41282 9.1665 3.33329C9.1665 4.25377 9.9127 4.99996 10.8332 4.99996Z"
            fill="#191919"
        />
        <path
            d="M11.6484 10.225C11.8526 10.5317 12.1576 10.7642 12.5076 10.8809L14.7367 11.6242L15.2642 10.0442L13.0351 9.30088L11.6492 7.22171C11.488 6.981 11.2672 6.78607 11.0084 6.65588L9.8134 6.05838C9.45789 5.88064 9.05035 5.83658 8.66507 5.93421L6.00423 6.59838C5.77068 6.65656 5.55249 6.76459 5.36463 6.91506C5.17677 7.06552 5.02369 7.25484 4.9159 7.47004L3.4209 10.4609L4.91173 11.2067L6.40673 8.21588L8.25923 7.75254L6.7559 14.7075L3.69423 16.8134L4.6384 18.1867L7.7009 16.08C8.05173 15.8384 8.29507 15.4759 8.38423 15.0592L8.81507 13.0692L10.9126 14.6425L11.6834 18.4967L13.3176 18.1692L12.5467 14.3134C12.4658 13.9117 12.2397 13.5539 11.9117 13.3084L10.1026 11.9517L10.6417 8.71421L11.6484 10.225V10.225Z"
            fill="#191919"
        />
    </svg>
);

interface EachRegionInfo {
    src: string;
    id: number;
    title: string;
}

export interface BannerRecommandCourseProps {
    distanceInfo: number;
    startInfo: EachRegionInfo;
    endInfo: EachRegionInfo;
    onClick: (id: number) => void;
}

const DEFAULT_SIZE = 5;

const ImgButton = styled.div`
    width: ${DEFAULT_SIZE}rem !important;
    height: ${DEFAULT_SIZE}rem !important;
    border-radius: 0.5rem !important;
    overflow: hidden;
`;

const DashLine = styled.hr`
    border: 0.3125px dashed #8e9095;
    margin-top: ${DEFAULT_SIZE / 2}rem;
`;

const ImgDisplay = styled.img`
    width: 100%;
    height: 100%;
`;

const TitleText = styled.span`
    margin-top: 0.3125rem;
    width: ${DEFAULT_SIZE}rem;
    text-align: center;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
`;

const DistanceText = styled.span`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #191919;
    margin: auto;
`;

const DistanceWapper = styled.div`
    top: 2.5rem;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    display: flex;
    background-color: white;
`;

const RegionBtn = (props: EachRegionInfo & Pick<BannerRecommandCourseProps, 'onClick'>): JSX.Element => (
    <Box
        display="flex"
        flexDirection="column"
        onClick={(e: SyntheticEvent) => {
            e.stopPropagation();
            props.onClick(props.id);
        }}
    >
        <ImgButton>
            <ImgDisplay src={props.src} />
        </ImgButton>
        <TitleText>{props.title}</TitleText>
    </Box>
);

const BannerRecommandCourse = (props: BannerRecommandCourseProps): JSX.Element => {
    const { unit, dist } = reAdjustmantKMnM(props.distanceInfo);

    return (
        <CommonSheetBanner>
            <Box display="flex">
                <RegionBtn onClick={props.onClick} {...props.startInfo} />
                <Box position="relative" flexGrow={1}>
                    <DistanceWapper>
                        <RunIcon />
                        <DistanceText>{`${dist}${unit}`}</DistanceText>
                    </DistanceWapper>
                    <DashLine />
                </Box>
                <RegionBtn onClick={props.onClick} {...props.endInfo} />
            </Box>
        </CommonSheetBanner>
    );
};

export default BannerRecommandCourse;
