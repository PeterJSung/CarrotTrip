import { Box, List, ListItemButton } from '@mui/material';
import styled from 'styled-components';
import { TourlistRecommandTotalSet } from 'vo/travelInfo';
import BannerRecommandCourse from './BannerRecommandCourse';
import BannerRecommandTotal from './BannerRecommandTotal';

export interface RecommandCourseListProps {
    selectedIdx?: number;
    dataSet: TourlistRecommandTotalSet;
    onListClick: (idx: number) => void;
    onTourAreaClick: (code: number) => void;
}

const ListWapper = styled(List)`
    padding: 0 !important;
    & > :not(:last-child) {
        margin-bottom: 0.75rem;
    }
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
    return (
        <Box>
            <TotalWrapper>
                <BannerRecommandTotal distance={props.dataSet.totalDistance} userName="test" score={4.3} />
            </TotalWrapper>
            <ListWapper>
                {props.dataSet.sections.map((d, idx) => {
                    const isSelected = idx === props.selectedIdx;
                    return (
                        <ListItemWapper
                            onClick={() => props.onListClick(idx)}
                            style={{
                                border: isSelected ? '1px solid #191919' : '1px solid rgba(219, 219, 219, 1)',
                            }}
                            key={`${d.startInfo.id}-${d.endInfo.title}`}
                            autoFocus={isSelected}
                        >
                            <BannerRecommandCourse onClick={props.onTourAreaClick} {...d} />
                        </ListItemWapper>
                    );
                })}
            </ListWapper>
        </Box>
    );
};

export default RecommandCourseList;
