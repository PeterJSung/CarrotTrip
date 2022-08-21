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
import { memo, useCallback, useEffect, useState } from 'react';

const includeTarget = <T extends MBTI_TYPE>(origin: T[], cmp: MBTI_TYPE): boolean => {
    return origin.includes(cmp as unknown as T);
};

export interface SignupMBTIContainerProps {
    firstValue?: string;
    onMBTIChange: (result: string) => void;
}

const SignupMBTIContainer = ({ firstValue, onMBTIChange }: SignupMBTIContainerProps): JSX.Element => {
    const [first, setFirst] = useState<M_ONE_TYPE>(firstValue?.[0] as any);
    const [second, setSecond] = useState<M_TWO_TYPE>(firstValue?.[1] as any);
    const [third, setThird] = useState<M_THR_TYPE>(firstValue?.[2] as any);
    const [four, setFour] = useState<M_FOR_TYPE>(firstValue?.[3] as any);

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

export default memo(SignupMBTIContainer);
