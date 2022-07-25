import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getMapInteractionStack, updateInetractionStack } from 'redux/mapinteractionstack';

import { DEFAULT_MAP_LEVEL } from 'common/constants';
import Marker, { MarkerProps } from 'component/basic/KakaoMap/Marker';
import { MarkerClusterer } from 'react-kakao-maps-sdk';
import { useThunk } from 'redux/common';
import { getToutlistArr } from 'redux/tourlistarea';
import { Interaction2Type } from 'vo/mapInteraction';
import { specializeContentId } from 'vo/travelInfo';
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
                // default 화면 보여주기
                itemKeys.forEach((eachKey) => {
                    tourlistAreaSelector.item[eachKey].forEach((eachD) => {
                        const newData: RenderPropsType = {
                            contentId: eachD.contentId,
                            contentTypeId: eachD.contentTypeId,
                            isSelect: false,
                            lat: eachD.lat,
                            lng: eachD.lng,
                        };
                        eachD.src && (newData.src = eachD.src);
                        newRenderData.push(newData);
                    });
                });
            }
            setRenderArr(newRenderData);
        }
        console.log(tourlistAreaSelector);
    }, [interactionStack, tourlistAreaSelector]);

    const markerClick = (id: number, typeId: number) => {
        const markerInfo: Interaction2Type = {
            type: 'Interaction2',
            tabIdx: specializeContentId.includes(typeId) ? typeId : 300 /** 300 is ETC */,
            selectedData: {
                id: id,
            },
        };
        updateInteraction(markerInfo);
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
