import { Box } from '@mui/material';
import { DEFAULT_MAP_LEVEL } from 'common/constants';
import MainSheetSlider from 'component/basic/BottomSheet/MainSheetSlider';
import RecommandCourseList from 'component/basic/BottomSheet/RecommandCourseList';
import SuggestionItemList from 'component/basic/BottomSheet/SuggestionItemList';
import { useSelector } from 'react-redux';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useThunk } from 'redux/common';
import { currentGps } from 'redux/gps';
import { getStackData, getSuggestionData, updateInetractionStack } from 'redux/mapinteractionstack';
import { getMbtiInfoArr, getTasteInfoArr, getToutlistArr } from 'redux/tourlistarea';
import { getUserMbti } from 'redux/userInfo';
import styled from 'styled-components';
import { PlaceDetailInfo, SuggestionInfo } from 'vo/mapInteraction';
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

const RenderList = (data: SuggestionInfo) => {
    const tourlistInfo = useSelector(getToutlistArr);
    const currentGpsInfo = useSelector(currentGps);
    const mbtiArr = useSelector(getMbtiInfoArr);
    const tasteArr = useSelector(getTasteInfoArr);
    const updateInteraction = useThunk(updateInetractionStack);

    if (data.tabIdx === 100) {
        return (
            <RecommandCourseList
                addressText={currentGpsInfo.regionStrFull}
                dataSet={tourlistInfo.recommand}
                onListClick={(idx: number) => {
                    updateInteraction('push', {
                        type: 'Suggestion',
                        data: {
                            tabIdx: 100,
                            selectedData: {
                                id: idx,
                            },
                        } as SuggestionInfo,
                    });
                }}
                onResetClick={() => {
                    updateInteraction('push', {
                        type: 'Suggestion',
                        data: {
                            tabIdx: 100,
                        } as SuggestionInfo,
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
                    await updateInteraction('push', {
                        type: 'Suggestion',
                        data: {
                            tabIdx: data.tabIdx,
                            selectedData: {
                                id,
                                pos: {
                                    lat: tourlistInfo.item[data.tabIdx][idx].lat,
                                    lng: tourlistInfo.item[data.tabIdx][idx].lng,
                                    zoom: DEFAULT_MAP_LEVEL,
                                },
                            },
                        } as SuggestionInfo,
                    });
                    await updateInteraction('push', {
                        type: 'PlaceDetail',
                        data: {
                            id,
                            eventTypeId: data.tabIdx,
                        } as PlaceDetailInfo,
                    });
                }}
            />
        );
    } else if (data.tabIdx === 200) {
        return (
            <SuggestionItemList
                dataSet={mbtiArr}
                selectedId={data.selectedData?.id}
                onListClick={async (id: number) => {
                    /**
                    const idx = mbtiArr.findIndex((d) => d.contentId === id);

                    await updateInteraction({
                        type: 'Interaction2',
                        tabIdx: data.tabIdx,
                        selectedData: {
                            id,
                            pos: {
                                lat: mbtiArr[idx].lat,
                                lng: mbtiArr[idx].lng,
                                zoom: DEFAULT_MAP_LEVEL,
                            },
                        },
                    });
                    await updateInteraction({
                        type: 'Interaction3',
                        id,
                        eventTypeId: data.tabIdx,
                    });
                     */
                }}
            />
        );
    } else if (data.tabIdx === 400) {
        return (
            <SuggestionItemList
                dataSet={tasteArr}
                selectedId={data.selectedData?.id}
                onListClick={async (id: number) => {
                    /**
                    const idx = tasteArr.findIndex((d) => d.contentId === id);

                    await updateInteraction({
                        type: 'Interaction2',
                        tabIdx: data.tabIdx,
                        selectedData: {
                            id,
                            pos: {
                                lat: tasteArr[idx].lat,
                                lng: tasteArr[idx].lng,
                                zoom: DEFAULT_MAP_LEVEL,
                            },
                        },
                    });
                    await updateInteraction({
                        type: 'Interaction3',
                        id,
                        eventTypeId: data.tabIdx,
                    });
                     */
                }}
            />
        );
    } else {
        console.error(`Tab index not defined please check ${data.tabIdx}`);
        return null;
    }
};

const BottomSheetSuggestionContainer = (): JSX.Element => {
    const updateInteraction = useThunk(updateInetractionStack);
    //const interactionType = useSelector(getCurrentInteractionType);
    const suggestionData = useSelector(getSuggestionData);
    const mapData = useSelector(getStackData);
    const getUserMBTI = useSelector(getUserMbti);

    const onBackClick = () => {
        updateInteraction('pop');
    };

    const suggestionSliderClick = (idx: number) => {
        updateInteraction('push', {
            type: 'Suggestion',
            data: {
                tabIdx: idx,
            } as SuggestionInfo,
        });
    };

    return (
        <SuggestionSheet
            open={!!suggestionData}
            onDismiss={onBackClick}
            // onDismiss={() => props.setOpen(true)}
            blocking={false}
            defaultSnap={0}
            header={
                <MainSheetSlider
                    isNonMbti={!!!getUserMBTI}
                    selectedIdx={suggestionData ? suggestionData.tabIdx : 1}
                    onClick={suggestionSliderClick}
                />
            }
            snapPoints={({ maxHeight }) => [maxHeight * 0.4, maxHeight * 0.95]}
        >
            <Box pt="0.5rem" px="0.75rem">
                {suggestionData && <RenderList {...suggestionData} />}
            </Box>
        </SuggestionSheet>
    );
};

export default BottomSheetSuggestionContainer;
