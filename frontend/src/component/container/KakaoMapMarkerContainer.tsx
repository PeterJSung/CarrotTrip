import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    getCurrentInteractionType,
    getTypeOneData,
    getTypeTwoData,
    updateInetractionStack,
} from 'redux/mapinteractionstack';

import { DEFAULT_MAP_LEVEL } from 'common/constants';
import Marker, { MarkerProps } from 'component/basic/KakaoMap/Marker';
import { MarkerClusterer } from 'react-kakao-maps-sdk';
import { useThunk } from 'redux/common';
import { getToutlistArr } from 'redux/tourlistarea';
import { Interaction2Type, Interaction3Type } from 'vo/mapInteraction';
import { getTargetCodeFromTourlist } from 'vo/travelInfo';
type RenderPropsType = Omit<MarkerProps, 'onClick'>;

const KakaoMapMarkerContainer = (): JSX.Element => {
    const interactionType = useSelector(getCurrentInteractionType);
    const typeOne = useSelector(getTypeOneData);
    const typeTwo = useSelector(getTypeTwoData);
    const tourlistAreaSelector = useSelector(getToutlistArr);
    const updateInteraction = useThunk(updateInetractionStack);

    const [renderArr, setRenderArr] = useState<RenderPropsType[]>([]);

    useEffect(() => {
        const itemKeys = Object.keys(tourlistAreaSelector.item);
        if (itemKeys.length > 0) {
            const newRenderData: RenderPropsType[] = [];
            if (interactionType !== 'PLACEDETAIL') {
                const currentSelectType = typeOne?.tabIdx;
                const currentSelectId = typeOne?.selectedData?.id;
                const isRecommandSelectId = typeOne?.selectedData?.id;
                // default 화면 보여주기
                itemKeys.forEach((eachKey) => {
                    const isSkipCauseFilter =
                        (interactionType === 'FILTER' || interactionType === 'ETC') &&
                        currentSelectType !== Number(eachKey);

                    const isFullRender = interactionType === 'MBTI';

                    tourlistAreaSelector.item[eachKey].forEach((eachD, idx) => {
                        const isSkipCauseCourse =
                            interactionType === 'COURSE' &&
                            tourlistAreaSelector.recommand.sections.filter((d) => d.data.contentId === eachD.contentId)
                                .length === 0;

                        let isSkipRecommandSelect = isRecommandSelectId !== undefined && interactionType === 'COURSE';

                        if (isRecommandSelectId !== undefined) {
                            const isRecommandSelectIdx = isRecommandSelectId;
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
            } else if (interactionType === 'PLACEDETAIL' && typeTwo) {
                const highLightId = typeTwo.id;
                const highlightTypeId = typeTwo.eventTypeId;
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
            }
            setRenderArr(newRenderData);
        }
    }, [interactionType, typeOne, typeTwo, tourlistAreaSelector]);

    const markerClick = (id: number, typeId: number) => {
        const nextIdx = getTargetCodeFromTourlist(typeId);

        if (interactionType !== 'PLACEDETAIL') {
            if (
                interactionType !== 'NONE' &&
                typeOne &&
                typeOne.tabIdx === nextIdx &&
                typeOne.selectedData?.id === id
            ) {
                // if already marker Clicked and current is same to
                updateInteraction();
            } else if (interactionType === 'COURSE') {
                const markerInfo: Interaction3Type = {
                    type: 'Interaction3',
                    eventTypeId: nextIdx,
                    id,
                };
                updateInteraction(markerInfo);
            } else {
                const markerInfo: Interaction2Type = {
                    type: 'Interaction2',
                    tabIdx: nextIdx,
                    selectedData: {
                        id,
                        pos: typeOne?.selectedData?.pos,
                    },
                };
                updateInteraction(markerInfo);
            }
        }
    };

    return (
        <MarkerClusterer averageCenter={true} minLevel={DEFAULT_MAP_LEVEL + (interactionType === 'COURSE' ? 5 : 1)}>
            {renderArr.map((props) => (
                <Marker key={props.contentId} onClick={markerClick} {...props} />
            ))}
        </MarkerClusterer>
    );
};

export default KakaoMapMarkerContainer;
