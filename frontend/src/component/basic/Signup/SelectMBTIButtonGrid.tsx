import { Box } from '@mui/material';
import { memo } from 'react';
import styled from 'styled-components';
import SelectMBTIButton from './SelectMBTIButton';
import { MBTI_TYPE } from './signupconstants';
export interface SelectMBTIButtonProps<T extends MBTI_TYPE> {
    type: T[];
    selected?: T;
    onClick: (mbtiType: MBTI_TYPE) => void;
}

const ButtonWrapper = styled(Box)`
    :not(:last-child) {
        // 마지막 <button> 태그에만 적용이 된다
        margin-bottom: 1rem;
    }
`;

const SelectMBTIButtonGrid = <T extends MBTI_TYPE>(props: SelectMBTIButtonProps<T>): JSX.Element => {
    return (
        <Box flexDirection="column" display="flex">
            {props.type.map((type) => (
                <ButtonWrapper key={type}>
                    <SelectMBTIButton type={type} checked={type === props.selected} onClick={props.onClick} />
                </ButtonWrapper>
            ))}
        </Box>
    );
};

export default memo(SelectMBTIButtonGrid);
