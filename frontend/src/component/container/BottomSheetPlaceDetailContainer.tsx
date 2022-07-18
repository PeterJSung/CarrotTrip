import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { RefHandles } from 'react-spring-bottom-sheet/dist/types';
import { useThunk } from 'redux/common';
import { getMapInteractionStack, updateInetractionStack } from 'redux/mapinteractionstack';
import styled from 'styled-components';

const PlaceDetailSheet = styled(BottomSheet)`
    & > div {
        width: 100%;
    }
    & [data-rsbs-header] {
        padding: 0 !important;
    }
`;

const BottomSheetPlaceDetailContainer = (): JSX.Element => {
    const getData = useSelector(getMapInteractionStack);
    const updateThunk = useThunk(updateInetractionStack);
    let isOpen = false;

    if (getData[1]) {
        isOpen = true;
    }

    const onBackClick = () => {
        updateThunk();
    };

    console.log(`It is PlaceInfo Container ${isOpen}`);
    const mapRef = useRef<kakao.maps.Map>(null);

    const [staticMode, setStaticMode] = useState<boolean>(false);
    const bottomSheetRef = useRef<RefHandles>(null);

    return (
        <PlaceDetailSheet
            open={isOpen}
            onDismiss={onBackClick}
            // onDismiss={() => props.setOpen(true)}
            blocking={false}
            header={<div>it is header</div>}
            snapPoints={({ maxHeight }) => [maxHeight * 0.8]}
        >
            <div>It is place DetailInfo</div>
        </PlaceDetailSheet>
    );
};

export default BottomSheetPlaceDetailContainer;
