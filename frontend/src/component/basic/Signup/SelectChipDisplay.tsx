import { Box } from '@mui/material';
import SelectChip from './SelectChip';
import { SelectChipVO } from './signupconstants';

export interface SelectChipDisplayProps {
    data: SelectChipVO[];
    onClick: (id: number) => void;
}

const SelectChipDisplay = (props: SelectChipDisplayProps): JSX.Element => {
    return (
        <Box>
            {props.data.map((eachData, index) => {
                return <SelectChip key={`${eachData.title}-${index}`} onClick={props.onClick} {...eachData} />;
            })}
        </Box>
    );
};

export default SelectChipDisplay;
