import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    getStackData,
    getSuggestionData,
    isPlaceDetailSelector,
    isRedirectSelector,
    isSuggestionSelector,
    updateInetractionStack,
} from 'redux/mapinteractionstack';

import { DEFAULT_MAP_LEVEL } from 'common/constants';
import { getCurrentInteractionType } from 'common/util';
import Marker, { MarkerProps } from 'component/basic/KakaoMap/Marker';
import { cloneDeep } from 'lodash';
import { MarkerClusterer } from 'react-kakao-maps-sdk';
import { useNavigate } from 'react-router-dom';
import { useThunk } from 'redux/common';
import { getToutlistArr } from 'redux/tourlistarea';
import { PlaceDetailInfo, RedirectInfo, SuggestionInfo } from 'vo/mapInteraction';
import { getTargetCodeFromTourlist } from 'vo/travelInfo';

type RenderPropsType = Omit<MarkerProps, 'onClick'>;

const KakaoMapMarkerContainer = (): JSX.Element => {
    const isSuggestion = useSelector(isSuggestionSelector);
    const suggestionDataInfo = useSelector(getSuggestionData);
    const isPlaceDetail = useSelector(isPlaceDetailSelector);
    const isRedirect = useSelector(isRedirectSelector);
    const mapData = useSelector(getStackData);
    const navigator = useNavigate();
    const tourlistAreaSelector = useSelector(getToutlistArr);
    const updateInteraction = useThunk(updateInetractionStack);

    const [renderArr, setRenderArr] = useState<RenderPropsType[]>([]);

    useEffect(() => {
        const itemKeys = Object.keys(tourlistAreaSelector.item);

        if (itemKeys.length > 0) {
            const newRenderData: RenderPropsType[] = [];
            if (isSuggestion) {
                const suggestionData = mapData[mapData.length - 1].data as SuggestionInfo;
                const type = getCurrentInteractionType(suggestionData.tabIdx);
                const currentSelectType = suggestionData.tabIdx;
                const currentSelectId = suggestionData.selectedData?.id;
                // default 화면 보여주기
                itemKeys.forEach((eachKey) => {
                    const isSkipCauseFilter =
                        (type === 'FILTER' || type === 'ETC') && currentSelectType !== Number(eachKey);

                    const isFullRender = type === 'MBTI';

                    tourlistAreaSelector.item[eachKey].forEach((eachD, idx) => {
                        const isSkipCauseCourse =
                            type === 'COURSE' &&
                            tourlistAreaSelector.recommand.sections.filter((d) => d.data.contentId === eachD.contentId)
                                .length === 0;

                        let isSkipRecommandSelect = currentSelectId !== undefined && type === 'COURSE';

                        if (currentSelectId !== undefined) {
                            const isRecommandSelectIdx = currentSelectId;
                            tourlistAreaSelector.recommand.sections.forEach((d, idx2) => {
                                if (d.data.contentId === eachD.contentId) {
                                    if (isRecommandSelectIdx === -1) {
                                        if (isRecommandSelectIdx + 1 === idx2) {
                                            isSkipRecommandSelect = false;
                                        }
                                    } else {
                                        if (
                                            isRecommandSelectIdx + 1 >=
                                            tourlistAreaSelector.recommand.sections.length
                                        ) {
                                            if (
                                                idx2 === tourlistAreaSelector.recommand.sections.length - 1 ||
                                                idx2 === tourlistAreaSelector.recommand.sections.length - 2
                                            ) {
                                                isSkipRecommandSelect = false;
                                            }
                                        } else {
                                            if (isRecommandSelectIdx + 1 === idx2 || isRecommandSelectIdx === idx2) {
                                                isSkipRecommandSelect = false;
                                            }
                                        }
                                    }
                                }
                            });
                        }

                        const isSkip =
                            !isFullRender && (isSkipCauseFilter || isSkipCauseCourse || isSkipRecommandSelect);

                        const newData: RenderPropsType = {
                            contentId: eachD.contentId,
                            eventTypeId: eachD.eventTypeId,
                            isSelect: eachD.eventTypeId === currentSelectType && currentSelectId === eachD.contentId,
                            lat: eachD.lat,
                            lng: eachD.lng,
                        };
                        eachD.src && (newData.src = eachD.src);
                        !isSkip && newRenderData.push(newData);
                    });
                });
            } else if (isPlaceDetail) {
                const placeDetailInfo = mapData[mapData.length - 1].data as PlaceDetailInfo;
                const highLightId = placeDetailInfo.id;
                const highlightTypeId = placeDetailInfo.eventTypeId;
                const idx = tourlistAreaSelector.item[highlightTypeId].findIndex((d) => d.contentId === highLightId);
                const item = tourlistAreaSelector.item[highlightTypeId][idx];
                const newData: RenderPropsType = {
                    contentId: item.contentId,
                    eventTypeId: highlightTypeId,
                    isSelect: true,
                    lat: item.lat,
                    lng: item.lng,
                };
                newRenderData.push(newData);
            } else if (isRedirect) {
                const data = mapData[mapData.length - 1].data as RedirectInfo;
                const pathArr = cloneDeep(data.pathArr);
                updateInteraction('pop');
                pathArr.forEach((d) => {
                    navigator(d);
                });
            } else {
                itemKeys.forEach((eachKey) => {
                    tourlistAreaSelector.item[eachKey].forEach((eachD, idx) => {
                        newRenderData.push({
                            contentId: eachD.contentId,
                            eventTypeId: eachD.eventTypeId,
                            isSelect: false,
                            lat: eachD.lat,
                            lng: eachD.lng,
                        });
                    });
                });
            }
            setRenderArr(newRenderData);
        }
    }, [mapData, tourlistAreaSelector]);

    const markerClick = (id: number, typeId: number) => {
        const nextIdx = getTargetCodeFromTourlist(typeId);

        if (suggestionDataInfo) {
            const type = getCurrentInteractionType(suggestionDataInfo.tabIdx);
            if (type === 'COURSE') {
                updateInteraction('push', {
                    type: 'PlaceDetail',
                    data: {
                        eventTypeId: nextIdx,
                        id,
                    } as PlaceDetailInfo,
                });
            } else {
                updateInteraction('push', {
                    type: 'Suggestion',
                    data: {
                        tabIdx: nextIdx,
                        selectedData: {
                            id,
                            pos: suggestionDataInfo.selectedData?.pos,
                        },
                    } as SuggestionInfo,
                });
            }
        } else {
            const data: SuggestionInfo = {
                tabIdx: nextIdx,
            };

            if (tourlistAreaSelector.item[nextIdx]) {
                const items = tourlistAreaSelector.item[nextIdx].find((d) => d.contentId === id);
                if (items) {
                    data.selectedData = {
                        id,
                    };
                }
            }

            updateInteraction('push', {
                type: 'Suggestion',
                data,
            });
        }
    };

    const minLevelOffset =
        suggestionDataInfo && getCurrentInteractionType(suggestionDataInfo.tabIdx) === 'COURSE' ? 5 : 1;

    return (
        <MarkerClusterer
            styles={[
                {
                    width: '3rem',
                    height: '3rem',
                    backgroundSize: 'contain',
                    backgroundImage: 'url(assets/maps/cluster.png)',
                    fontFamily: 'Lato',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '3rem',
                    color: 'white',
                    textAlign: 'center',
                },
            ]}
            averageCenter={true}
            minLevel={DEFAULT_MAP_LEVEL + minLevelOffset}
        >
            {renderArr.map((props) => (
                <Marker key={props.contentId} onClick={markerClick} {...props} />
            ))}
        </MarkerClusterer>
    );
};

export default KakaoMapMarkerContainer;
