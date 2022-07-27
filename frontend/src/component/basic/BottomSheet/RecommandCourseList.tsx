import { Box, List, ListItemButton } from '@mui/material';
import styled from 'styled-components';
import { TourlistRecommandCourseSet, TourlistRecommandTotalSet } from 'vo/travelInfo';
import BannerRecommandLine from './BannerRecommandLine';
import BannerRecommandStart from './BannerRecommandStart';
import BannerRecommandTotal from './BannerRecommandTotal';
import BannerSuggestionItem from './BannerSuggestionItem';

export interface RecommandCourseListProps {
    selectedIdx?: number;
    addressText: string;
    dataSet: TourlistRecommandTotalSet;
    onListClick: (idx: number) => void;
    onResetClick: () => void;
    onTourAreaClick: (code: number) => void;
}

const ListWapper = styled(List)`
    padding: 0 !important;
`;

const ListItemWapper = styled(ListItemButton)`
    padding: 0 !important;
    border-radius: 0.5rem !important;
`;

const TotalWrapper = styled(Box)`
    padding: 0 !important;
    border: 1px solid #dbdbdb;
    border-radius: 0.5rem;
    margin-bottom: 0.75rem;
`;

const RecommandCourseList = (props: RecommandCourseListProps): JSX.Element => {
    // selectIdx 는 반드시 dataSet Length 보다 작아야함.
    const isHighlight = props.selectedIdx !== undefined;
    const isStartRender = props.selectedIdx === undefined || props.selectedIdx === -1;
    let renderSections: { idx: number; info: TourlistRecommandCourseSet }[] = [];

    if (props.selectedIdx !== undefined) {
        // need to Filter
        const nextIdx = props.selectedIdx + 1;
        const isLastClick = nextIdx >= props.dataSet.sections.length;
        const pushData = (idx: number) => {
            renderSections.push({
                idx,
                info: props.dataSet.sections[idx],
            });
        };

        isLastClick && pushData(props.selectedIdx - 1);
        !isStartRender && pushData(props.selectedIdx);
        !isLastClick && pushData(nextIdx);
    } else {
        renderSections = props.dataSet.sections.map((info, idx) => ({
            info,
            idx,
        }));
    }
    return (
        <Box>
            {isHighlight && (
                <TotalWrapper onClick={props.onResetClick}>
                    <BannerRecommandTotal distance={props.dataSet.totalDistance} userName="test" score={4.3} />
                </TotalWrapper>
            )}
            <ListWapper>
                {isStartRender && (
                    <ListItemWapper
                        onClick={() => props.onListClick(-1)}
                        style={{
                            border: isHighlight ? '1px solid #191919' : '1px solid rgba(219, 219, 219, 1)',
                        }}
                    >
                        <BannerRecommandStart addressText={props.addressText} />
                    </ListItemWapper>
                )}
                {renderSections.map((d, idx) => {
                    return (
                        <>
                            {!(!isStartRender && idx === 0) && (
                                <BannerRecommandLine distanceText={props.dataSet.sections[d.idx].distanceInfo} />
                            )}
                            <ListItemWapper
                                onClick={() => props.onListClick(d.idx)}
                                style={{
                                    border: isHighlight ? '1px solid #191919' : '1px solid rgba(219, 219, 219, 1)',
                                }}
                                key={d.info.data.contentId}
                            >
                                <BannerSuggestionItem
                                    description={d.info.data.addr}
                                    contentTypeId={d.info.data.contentTypeId}
                                    placeName={d.info.data.title}
                                    rating={d.info.data.aveScore}
                                    src={d.info.data.src}
                                />
                            </ListItemWapper>
                        </>
                    );
                })}
            </ListWapper>
        </Box>
    );
};

export default RecommandCourseList;
