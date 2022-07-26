import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getMapInteractionStack, updateInetractionStack } from 'redux/mapinteractionstack';

import { DEFAULT_MAP_LEVEL } from 'common/constants';
import Marker, { MarkerProps } from 'component/basic/KakaoMap/Marker';
import { MarkerClusterer } from 'react-kakao-maps-sdk';
import { useThunk } from 'redux/common';
import { getToutlistArr } from 'redux/tourlistarea';
import { Interaction2Type } from 'vo/mapInteraction';
import { getTargetCodeFromTourlist, specializeContentId } from 'vo/travelInfo';
type RenderPropsType = Omit<MarkerProps, 'onClick'>;

const KakaoMapMarkerContainer = (): JSX.Element => {
    const interactionStack = useSelector(getMapInteractionStack);
    const tourlistAreaSelector = useSelector(getToutlistArr);
    const updateInteraction = useThunk(updateInetractionStack);

    const [renderArr, setRenderArr] = useState<RenderPropsType[]>([]);

    useEffect(() => {
        const itemKeys = Object.keys(tourlistAreaSelector.item);
        if (itemKeys.length > 0 && tourlistAreaSelector.recommand.totalDistance > 0) {
            const newRenderData: RenderPropsType[] = [];
            if (interactionStack.length === 0 || interactionStack.length === 1) {
                const currentSelectType = interactionStack[0]?.tabIdx;
                const currentSelectIdx = interactionStack[0]?.selectedData?.id;

                // default 화면 보여주기
                itemKeys.forEach((eachKey) => {
                    let isSkip = false;
                    if (
                        currentSelectType !== undefined &&
                        (specializeContentId.includes(currentSelectType) || currentSelectType === 300) &&
                        currentSelectType !== Number(eachKey)
                    ) {
                        //skip
                        isSkip = true;
                    }

                    tourlistAreaSelector.item[eachKey].forEach((eachD, idx) => {
                        const newData: RenderPropsType = {
                            contentId: eachD.contentId,
                            contentTypeId: eachD.contentTypeId,
                            isSelect: eachD.contentTypeId === currentSelectType && currentSelectIdx === idx,
                            lat: eachD.lat,
                            lng: eachD.lng,
                        };
                        eachD.src && (newData.src = eachD.src);
                        !isSkip && newRenderData.push(newData);
                    });
                });
            } else if (interactionStack.length === 2 && interactionStack[1]) {
                const highlightIdx = interactionStack[1].idx;
                const highlightTypeId = interactionStack[1].contentTypeId;
                const item = tourlistAreaSelector.item[highlightTypeId][highlightIdx];
                const newData: RenderPropsType = {
                    contentId: item.contentId,
                    contentTypeId: highlightTypeId,
                    isSelect: true,
                    lat: item.lat,
                    lng: item.lng,
                };
                newRenderData.push(newData);
            }
            setRenderArr(newRenderData);
        }
        console.log(tourlistAreaSelector);
    }, [interactionStack, tourlistAreaSelector]);

    const markerClick = (id: number, typeId: number) => {
        const nextIdx = getTargetCodeFromTourlist(typeId);
        const idx = tourlistAreaSelector.item[nextIdx].findIndex((d) => d.contentId === id);

        if (
            interactionStack[0] !== undefined &&
            interactionStack[0].tabIdx === nextIdx &&
            interactionStack[0].selectedData?.id === idx
        ) {
            // if already marker Clicked and current is same to
            updateInteraction();
        } else if (!interactionStack[1]) {
            const markerInfo: Interaction2Type = {
                type: 'Interaction2',
                tabIdx: nextIdx,
                selectedData: {
                    id: idx,
                    pos: interactionStack[0]?.selectedData?.pos,
                },
            };
            updateInteraction(markerInfo);
        }
    };

    return (
        <MarkerClusterer averageCenter={true} minLevel={DEFAULT_MAP_LEVEL + 1}>
            {renderArr.map((props) => (
                <Marker key={props.contentId} onClick={markerClick} {...props} />
            ))}
        </MarkerClusterer>
    );
};

export default KakaoMapMarkerContainer;
