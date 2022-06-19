import { Box, Grid } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SelectSquareBox from './SelectSquareBox';
import { SelectBoxVO } from './signupconstants';

const SPACE: number = 0.5;

export interface SelectSquareBoxGridProps {
    colCount: number;
    data: SelectBoxVO[];
    onClick: (id: string) => void;
}

const SelectSquareBoxGrid = (props: SelectSquareBoxGridProps): JSX.Element => {
    const rowCount = Math.ceil(props.data.length / props.colCount);
    const [width, setWidth] = useState<number>(0);
    const gridRef = useRef<HTMLDivElement>(null);
    let idx = 0;

    useEffect(() => {
        gridRef.current && setWidth(gridRef.current.clientWidth);
    }, []);

    const RowContainer = styled(Grid)`
        justify-content: space-between;
        &:not(:last-child) {
            margin-bottom: ${SPACE}rem;
        }
    `;

    const ItemContainer = styled(Box)`
        width: calc((${width}px - ${SPACE}rem * (${props.colCount} - 1)) / ${props.colCount});
        height: calc((${width}px - ${SPACE}rem * (${props.colCount} - 1)) / ${props.colCount});
        display: inline-block;
    `;

    return (
        <Grid container direction="column" ref={gridRef}>
            {width > 0 &&
                Array.from({ length: rowCount }).map((d, i) => {
                    return (
                        <RowContainer container key={i}>
                            {Array.from({ length: props.colCount }).map((d, i) => {
                                const renderIdx = idx;
                                idx++;
                                const key = `${renderIdx}-${i}`;
                                if (renderIdx <= props.data.length) {
                                    return (
                                        <ItemContainer key={key}>
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
