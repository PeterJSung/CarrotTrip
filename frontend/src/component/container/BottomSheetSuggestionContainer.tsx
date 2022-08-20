import { Box } from '@mui/material';
import { DEFAULT_MAP_LEVEL } from 'common/constants';
import MainSheetSlider from 'component/basic/BottomSheet/MainSheetSlider';
import RecommandCourseList from 'component/basic/BottomSheet/RecommandCourseList';
import SuggestionItemList from 'component/basic/BottomSheet/SuggestionItemList';
import { useSelector } from 'react-redux';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useThunk } from 'redux/common';
import { currentGps } from 'redux/gps';
import { getCurrentInteractionType, getTypeOneData, updateInetractionStack } from 'redux/mapinteractionstack';
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
    const currentGpsInfo = useSelector(currentGps);
    const updateInteraction = useThunk(updateInetractionStack);
    if (data.tabIdx === 100) {
        return (
            <RecommandCourseList
                addressText={currentGpsInfo.regionStrFull}
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
                onResetClick={() => {
                    updateInteraction({
                        type: 'Interaction2',
                        tabIdx: 100,
                    });
                }}
                selectedIdx={data.selectedData?.id}
            />
        );
    } else if (specializeContentId.includes(data.tabIdx) || data.tabIdx === 300) {
        return (
            <SuggestionItemList
                dataSet={tourlistInfo.item[data.tabIdx]}
                selectedId={data.selectedData?.id}
                onListClick={async (id: number) => {
                    const idx = tourlistInfo.item[data.tabIdx].findIndex((d) => d.contentId === id);

                    await updateInteraction({
                        type: 'Interaction2',
                        tabIdx: data.tabIdx,
                        selectedData: {
                            id,
                            pos: {
                                lat: tourlistInfo.item[data.tabIdx][idx].lat,
                                lng: tourlistInfo.item[data.tabIdx][idx].lng,
                                zoom: DEFAULT_MAP_LEVEL,
                            },
                        },
                    });
                    await updateInteraction({
                        type: 'Interaction3',
                        id,
                        eventTypeId: data.tabIdx,
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
    const interactionType = useSelector(getCurrentInteractionType);
    const typeOne = useSelector(getTypeOneData);
    const getUserMBTI = useSelector(getUserMbti);

    const isOpen = interactionType !== 'NONE' && interactionType !== 'PLACEDETAIL';

    const onBackClick = () => {
        updateInteraction();
    };

    const suggestionSliderClick = (idx: number) => {
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
                    selectedIdx={typeOne ? typeOne.tabIdx : 1}
                    onClick={suggestionSliderClick}
                />
            }
            snapPoints={({ maxHeight }) => [maxHeight * 0.4, maxHeight * 0.95]}
        >
            <Box pt="0.5rem" px="0.75rem">
                {typeOne && <RenderList {...typeOne} />}
            </Box>
        </SuggestionSheet>
    );
};

export default BottomSheetSuggestionContainer;
