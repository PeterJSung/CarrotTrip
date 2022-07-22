import { Button } from '@mui/material';
import { DEFAULT_LAT, DEFAULT_LNG } from 'common/constants';
import MainSheetSlider from 'component/basic/BottomSheet/MainSheetSlider';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { RefHandles } from 'react-spring-bottom-sheet/dist/types';
import { useThunk } from 'redux/common';
import { getMapInteractionStack, updateInetractionStack } from 'redux/mapinteractionstack';
import styled from 'styled-components';
import { Interaction2Type, Interaction3Type } from 'vo/mapInteraction';

const SuggestionSheet = styled(BottomSheet)`
    & > div {
        width: 95%;
        margin: auto;
    }
    & [data-rsbs-header] {
        padding: 0.5rem 0.25rem;
    }
`;

const BottomSheetSuggestionContainer = (): JSX.Element => {
    const updateInteraction = useThunk(updateInetractionStack);
    const getData = useSelector(getMapInteractionStack);

    let isOpen = false;

    if (getData[0] && !getData[1]) {
        isOpen = true;
    }

    const onBackClick = () => {
        updateInteraction();
    };

    const mapRef = useRef<kakao.maps.Map>(null);

    const [staticMode, setStaticMode] = useState<boolean>(false);
    const bottomSheetRef = useRef<RefHandles>(null);

    const suggestionSliderClick = (idx: number) => {
        const markerInfo: Interaction2Type = {
            type: 'Interaction2',
            tabIdx: idx,
            selectedData: {
                id: 1,
                lat: DEFAULT_LAT,
                lng: DEFAULT_LNG,
            },
        };
        updateInteraction(markerInfo);
    };

    return (
        <SuggestionSheet
            open={isOpen}
            onDismiss={onBackClick}
            // onDismiss={() => props.setOpen(true)}
            blocking={false}
            defaultSnap={0}
            header={
                <MainSheetSlider selectedIdx={getData[0] ? getData[0].tabIdx : 1} onClick={suggestionSliderClick} />
            }
            snapPoints={({ maxHeight }) => [maxHeight * 0.4, maxHeight * 0.95]}
        >
            <Button
                onClick={() => {
                    const nextPlaceDetail: Interaction3Type = {
                        id: 1,
                        type: 'Interaction3',
                    };
                    updateInteraction(nextPlaceDetail);
                }}
            >
                It is Suggestion Sheet if{' '}
            </Button>
        </SuggestionSheet>
    );
};

export default BottomSheetSuggestionContainer;
