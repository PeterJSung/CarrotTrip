import { List } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TourlistRecoomandDataset } from 'vo/travelInfo';
import BannerRecommandCourse from './BannerRecommandCourse';

export interface RecommandCourseListProps {
    selectedIdx: number;
    dataSet: TourlistRecoomandDataset[];
    onClick: (code: number) => void;
}

const RecommandCourseList = (props: RecommandCourseListProps): JSX.Element => {
    const { t } = useTranslation();

    return (
        <List>
            {props.dataSet.map((d) => {
                return (
                    <BannerRecommandCourse key={`${d.startInfo.id}-${d.endInfo.title}`} onClick={console.log} {...d} />
                );
            })}
        </List>
    );
};

export default RecommandCourseList;
