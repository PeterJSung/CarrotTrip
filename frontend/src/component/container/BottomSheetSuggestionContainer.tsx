import { Button } from '@mui/material';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { RefHandles } from 'react-spring-bottom-sheet/dist/types';
import { useThunk } from 'redux/common';
import { getMapInteractionStack, updateInetractionStack } from 'redux/mapinteractionstack';
import styled from 'styled-components';
import { Interaction3Type } from 'vo/mapInteraction';

const SuggestionSheet = styled(BottomSheet)`
    & > div {
        width: 95%;
        margin: auto;
    }
`;

const BottomSheetSuggestionContainer = (): JSX.Element => {
    const updateThunk = useThunk(updateInetractionStack);
    const getData = useSelector(getMapInteractionStack);
    let isOpen = false;

    if (getData[0] && !getData[1]) {
        isOpen = true;
    }

    const onBackClick = () => {
        updateThunk();
    };

    console.log(`It is Suggestion Container ${isOpen}`);
    const mapRef = useRef<kakao.maps.Map>(null);

    const [staticMode, setStaticMode] = useState<boolean>(false);
    const bottomSheetRef = useRef<RefHandles>(null);

    return (
        <SuggestionSheet
            open={isOpen}
            onDismiss={onBackClick}
            // onDismiss={() => props.setOpen(true)}
            blocking={false}
            defaultSnap={0}
            header={<div>This is Header</div>}
            snapPoints={({ maxHeight }) => [maxHeight * 0.4, maxHeight * 0.95]}
        >
            <Button
                onClick={() => {
                    const nextPlaceDetail: Interaction3Type = {
                        id: 1,
                        type: 'Interaction3',
                    };
                    updateThunk(nextPlaceDetail);
                }}
            >
                It is Suggestion Sheet if{' '}
            </Button>
        </SuggestionSheet>
    );
};

export default BottomSheetSuggestionContainer;
