import DetailPlace from 'component/basic/Detail/DetailPlace';
import { useSelector } from 'react-redux';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useThunk } from 'redux/common';
import { getMapInteractionStack, updateInetractionStack } from 'redux/mapinteractionstack';
import styled from 'styled-components';

const PlaceDetailSheet = styled(BottomSheet)`
    & > div {
        width: 100%;
    }
    & [data-rsbs-header] {
        display: flex;
        position: absolute;
        width: 100%;
        box-shadow: unset !important;
    }
    & [data-rsbs-overlay] {
        overflow: hidden;
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

    return (
        <PlaceDetailSheet
            open={isOpen}
            onDismiss={onBackClick}
            // onDismiss={() => props.setOpen(true)}
            blocking={false}
            snapPoints={({ maxHeight }) => [maxHeight * 0.8]}
        >
            <DetailPlace
                src="https://picsum.photos/800"
                address="testAdd"
                description="testDesc"
                mbtiArr={[]}
                moodArr={[1, 4, 6, 8, 9, 13]}
                name="testName"
                type="testType"
            />
        </PlaceDetailSheet>
    );
};

export default BottomSheetPlaceDetailContainer;
