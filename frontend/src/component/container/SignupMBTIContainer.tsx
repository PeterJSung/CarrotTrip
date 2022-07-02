import { Grid } from '@mui/material';
import SelectMBTIButtonGrid from 'component/basic/Signup/SelectMBTIButtonGrid';
import {
    MBTI_TYPE,
    M_FOR_TYPE,
    M_FOR_VALUES,
    M_ONE_TYPE,
    M_ONE_VALUES,
    M_THR_TYPE,
    M_THR_VALUES,
    M_TWO_TYPE,
    M_TWO_VALUES,
} from 'component/basic/Signup/signupconstants';
import { useCallback, useEffect, useState } from 'react';

const includeTarget = <T extends MBTI_TYPE>(origin: T[], cmp: MBTI_TYPE): boolean => {
    return origin.includes(cmp as unknown as T);
};

export interface SignupMBTIContainerProps {
    onMBTIChange: (result: string) => void;
}

const SignupMBTIContainer = ({ onMBTIChange }: SignupMBTIContainerProps): JSX.Element => {
    const [first, setFirst] = useState<M_ONE_TYPE>();
    const [second, setSecond] = useState<M_TWO_TYPE>();
    const [third, setThird] = useState<M_THR_TYPE>();
    const [four, setFour] = useState<M_FOR_TYPE>();

    const onClick = useCallback((mbtiType: MBTI_TYPE) => {
        if (includeTarget(M_ONE_VALUES, mbtiType)) {
            setFirst(mbtiType as M_ONE_TYPE);
        } else if (includeTarget(M_TWO_VALUES, mbtiType)) {
            setSecond(mbtiType as M_TWO_TYPE);
        } else if (includeTarget(M_THR_VALUES, mbtiType)) {
            setThird(mbtiType as M_THR_TYPE);
        } else if (includeTarget(M_FOR_VALUES, mbtiType)) {
            setFour(mbtiType as M_FOR_TYPE);
        }
    }, []);

    useEffect(() => {
        const resultMBTI: string = (first ?? '') + (second ?? '') + (third ?? '') + (four ?? '');
        onMBTIChange(resultMBTI);
    }, [first, second, third, four, onMBTIChange]);

    return (
        <Grid container justifyContent="space-between">
            <SelectMBTIButtonGrid type={M_ONE_VALUES} selected={first} onClick={onClick} />
            <SelectMBTIButtonGrid type={M_TWO_VALUES} selected={second} onClick={onClick} />
            <SelectMBTIButtonGrid type={M_THR_VALUES} selected={third} onClick={onClick} />
            <SelectMBTIButtonGrid type={M_FOR_VALUES} selected={four} onClick={onClick} />
        </Grid>
    );
};

export default SignupMBTIContainer;
