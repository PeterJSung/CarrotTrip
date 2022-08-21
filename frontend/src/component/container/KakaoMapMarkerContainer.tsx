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

const MarkerImg = () => (
    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5" filter="url(#filter0_d_740_844)">
            <circle cx="34" cy="30" r="26" fill="#191919" />
        </g>
        <circle cx="34" cy="30" r="21" fill="#191919" />
        <path
            d="M29.9148 31.64V27.856C29.9148 27.4987 29.9388 27.104 29.9868 26.672L26.3948 31.64H29.9148ZM33.0908 31.64V32.784C33.0908 32.8907 33.0561 32.984 32.9868 33.064C32.9174 33.1387 32.8188 33.176 32.6908 33.176H31.6348V36H29.9148V33.176H25.0348C24.9014 33.176 24.7841 33.136 24.6828 33.056C24.5814 32.9707 24.5174 32.8667 24.4908 32.744L24.2828 31.744L29.7628 24.424H31.6348V31.64H33.0908ZM34.364 27.656C34.444 27.1013 34.5987 26.616 34.828 26.2C35.0573 25.7787 35.3427 25.4293 35.684 25.152C36.0307 24.8693 36.4253 24.6587 36.868 24.52C37.316 24.376 37.796 24.304 38.308 24.304C38.8413 24.304 39.3213 24.3813 39.748 24.536C40.18 24.6853 40.548 24.896 40.852 25.168C41.156 25.4347 41.388 25.7493 41.548 26.112C41.7133 26.4747 41.796 26.8667 41.796 27.288C41.796 27.656 41.7533 27.9813 41.668 28.264C41.588 28.5413 41.4707 28.784 41.316 28.992C41.1613 29.2 40.9693 29.376 40.74 29.52C40.5107 29.664 40.252 29.784 39.964 29.88C40.6573 30.0987 41.1747 30.432 41.516 30.88C41.8573 31.328 42.028 31.8907 42.028 32.568C42.028 33.144 41.9213 33.6533 41.708 34.096C41.4947 34.5387 41.2067 34.912 40.844 35.216C40.4813 35.5147 40.06 35.7413 39.58 35.896C39.1053 36.0507 38.6013 36.128 38.068 36.128C37.4867 36.128 36.98 36.0613 36.548 35.928C36.116 35.7947 35.74 35.5973 35.42 35.336C35.1 35.0747 34.828 34.7547 34.604 34.376C34.38 33.9973 34.188 33.56 34.028 33.064L34.9 32.704C35.1293 32.608 35.3427 32.584 35.54 32.632C35.7427 32.6747 35.8893 32.7813 35.98 32.952C36.076 33.1387 36.18 33.3227 36.292 33.504C36.4093 33.6853 36.548 33.848 36.708 33.992C36.868 34.1307 37.0547 34.2453 37.268 34.336C37.4867 34.4213 37.7453 34.464 38.044 34.464C38.38 34.464 38.6733 34.4107 38.924 34.304C39.1747 34.192 39.3827 34.048 39.548 33.872C39.7187 33.696 39.844 33.5013 39.924 33.288C40.0093 33.0693 40.052 32.8507 40.052 32.632C40.052 32.3547 40.0227 32.104 39.964 31.88C39.9053 31.6507 39.7827 31.456 39.596 31.296C39.4093 31.136 39.14 31.0107 38.788 30.92C38.4413 30.8293 37.9747 30.784 37.388 30.784V29.376C37.8733 29.3707 38.276 29.3253 38.596 29.24C38.916 29.1547 39.1693 29.0373 39.356 28.888C39.548 28.7333 39.6813 28.5493 39.756 28.336C39.8307 28.1227 39.868 27.888 39.868 27.632C39.868 27.088 39.716 26.6747 39.412 26.392C39.108 26.1093 38.7027 25.968 38.196 25.968C37.9613 25.968 37.7453 26.0027 37.548 26.072C37.3507 26.136 37.172 26.2293 37.012 26.352C36.8573 26.4693 36.7267 26.608 36.62 26.768C36.5133 26.928 36.4333 27.104 36.38 27.296C36.2893 27.5413 36.1693 27.704 36.02 27.784C35.876 27.864 35.6707 27.8827 35.404 27.84L34.364 27.656Z"
            fill="white"
        />
        <defs></defs>
    </svg>
);

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
            minLevel={DEFAULT_MAP_LEVEL + (interactionType === 'COURSE' ? 5 : 1)}
        >
            {renderArr.map((props) => (
                <Marker key={props.contentId} onClick={markerClick} {...props} />
            ))}
        </MarkerClusterer>
    );
};

export default KakaoMapMarkerContainer;
