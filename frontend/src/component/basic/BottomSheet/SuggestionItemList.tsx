import { List, ListItemButton } from '@mui/material';
import styled from 'styled-components';
import { TourlistDataset } from 'vo/travelInfo';
import BannerSuggestionItem from './BannerSuggestionItem';

export interface SuggestionItemListProps {
    selectedIdx?: number;
    dataSet: TourlistDataset[];
    onListClick: (idx: number) => void;
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

const SuggestionItemList = (props: SuggestionItemListProps): JSX.Element => {
    return (
        <ListWapper>
            {props.dataSet.map((d, idx) => {
                const isSelected = idx === props.selectedIdx;
                return (
                    <ListItemWapper
                        onClick={() => props.onListClick(idx)}
                        style={{
                            border: isSelected ? '1px solid #191919' : '1px solid rgba(219, 219, 219, 1)',
                        }}
                        key={`${d.title}-${d.addr}`}
                        autoFocus={isSelected}
                    >
                        <BannerSuggestionItem
                            contentTypeId={d.contentTypeId}
                            src={d.src}
                            description={d.addr}
                            placeName={d.title}
                            rating={d.aveScore}
                        />
                    </ListItemWapper>
                );
            })}
        </ListWapper>
    );
};

export default SuggestionItemList;
