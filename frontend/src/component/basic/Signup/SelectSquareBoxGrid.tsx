import { Grid } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SelectSquareBox from './SelectSquareBox';
import { SelectBoxVO } from './signupconstants';

const SPACE: number = 0.5;

export interface SelectSquareBoxGridProps {
    colCount: number;
    data: SelectBoxVO[];
    onClick: (id: number) => void;
}

const RowContainer = styled(Grid)<{ btmmargin: number }>`
    justify-content: space-between;
    &:not(:last-child) {
        margin-bottom: ${(p) => p.btmmargin}rem;
    }
`;

const ItemContainer = styled(Grid)<{ colcount: number; appendmargin: number; totalwidth: number }>`
    width: calc(
        ((${(p) => p.totalwidth}px - ${SPACE}rem * (${(p) => p.colcount} - 1)) / ${(p) => p.colcount}) -
            ${(p) => p.appendmargin}rem
    );
    height: calc(
        ((${(p) => p.totalwidth}px - ${SPACE}rem * (${(p) => p.colcount} - 1)) / ${(p) => p.colcount}) -
            ${(p) => p.appendmargin}rem
    );
    display: inline-block;
`;

const SelectSquareBoxGrid = (props: SelectSquareBoxGridProps): JSX.Element => {
    const rowCount = Math.ceil(props.data.length / props.colCount);
    const [width, setWidth] = useState<number>(0);
    const gridRef = useRef<HTMLDivElement>(null);
    let idx = 0;
    const appendMargin = SPACE / props.colCount;
    useEffect(() => {
        gridRef.current && setWidth(gridRef.current.clientWidth);
    }, []);

    return (
        <Grid container direction="column" ref={gridRef}>
            {width > 0 &&
                Array.from({ length: rowCount }).map((d, i) => {
                    return (
                        <RowContainer btmmargin={SPACE + appendMargin} container key={i}>
                            {Array.from({ length: props.colCount }).map((d, i) => {
                                const renderIdx = idx;
                                idx++;
                                const key = `${renderIdx}-${i}`;
                                if (renderIdx <= props.data.length) {
                                    return (
                                        <ItemContainer
                                            colcount={props.colCount}
                                            totalwidth={width}
                                            appendmargin={appendMargin}
                                            key={key}
                                        >
                                            <SelectSquareBox onClick={props.onClick} {...props.data[renderIdx]} />
                                        </ItemContainer>
                                    );
                                }
                            })}
                        </RowContainer>
                    );
                })}
        </Grid>
    );
};

export default SelectSquareBoxGrid;
