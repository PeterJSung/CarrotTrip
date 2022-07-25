import { Box } from '@mui/material';
import MainSheetSlider from 'component/basic/BottomSheet/MainSheetSlider';
import RecommandCourseList from 'component/basic/BottomSheet/RecommandCourseList';
import SuggestionItemList from 'component/basic/BottomSheet/SuggestionItemList';
import { useSelector } from 'react-redux';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useThunk } from 'redux/common';
import { getMapInteractionStack, updateInetractionStack } from 'redux/mapinteractionstack';
import { getToutlistArr } from 'redux/tourlistarea';
import { getUserMbti } from 'redux/userInfo';
import styled from 'styled-components';
import { Interaction2Type } from 'vo/mapInteraction';
import { specializeContentId } from 'vo/travelInfo';

const SuggestionSheet = styled(BottomSheet)`
    & > div {
        width: 95%;
        margin: auto;
    }
    & [data-rsbs-header] {
        padding: 0.5rem 0.25rem;
        box-shadow: unset !important;
    }
`;

const RenderList = (data: Interaction2Type) => {
    const tourlistInfo = useSelector(getToutlistArr);
    const updateInteraction = useThunk(updateInetractionStack);
    if (data.tabIdx === 100) {
        return (
            <RecommandCourseList
                dataSet={tourlistInfo.recommand}
                onListClick={(idx: number) => {
                    updateInteraction({
                        type: 'Interaction2',
                        tabIdx: 100,
                        selectedData: {
                            id: idx,
                        },
                    });
                }}
                onTourAreaClick={console.log}
                selectedIdx={data.selectedData?.id}
            />
        );
    } else if (specializeContentId.includes(data.tabIdx) || data.tabIdx === 300) {
        return (
            <SuggestionItemList
                dataSet={tourlistInfo.item[data.tabIdx]}
                selectedIdx={data.selectedData?.id}
                onListClick={(idx: number) => {
                    updateInteraction({
                        type: 'Interaction2',
                        tabIdx: data.tabIdx,
                        selectedData: {
                            id: idx,
                        },
                    });
                }}
            />
        );
    } else {
        return <div>A</div>;
    }
};

const BottomSheetSuggestionContainer = (): JSX.Element => {
    const updateInteraction = useThunk(updateInetractionStack);
    const getData = useSelector(getMapInteractionStack);
    const getUserMBTI = useSelector(getUserMbti);

    let isOpen = false;

    if (getData[0] && !getData[1]) {
        isOpen = true;
    }

    const onBackClick = () => {
        updateInteraction();
    };

    const suggestionSliderClick = (idx: number) => {
        console.log(`Click Idx ${idx}`);
        const markerInfo: Interaction2Type = {
            type: 'Interaction2',
            tabIdx: idx,
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
                <MainSheetSlider
                    isNonMbti={!!!getUserMBTI}
                    selectedIdx={getData[0] ? getData[0].tabIdx : 1}
                    onClick={suggestionSliderClick}
                />
            }
            snapPoints={({ maxHeight }) => [maxHeight * 0.4, maxHeight * 0.95]}
        >
            <Box pt="0.5rem" px="0.75rem">
                {getData[0] && <RenderList {...getData[0]} />}
            </Box>
        </SuggestionSheet>
    );
};

export default BottomSheetSuggestionContainer;
