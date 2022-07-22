import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getMapInteractionStack } from 'redux/mapinteractionstack';

import Marker, { MarkerProps } from 'component/basic/KakaoMap/Marker';
import { getToutlistArr } from 'redux/tourlistarea';

type RenderPropsType = Omit<MarkerProps, 'onClick'>;

const KakaoMapMarkerContainer = (): JSX.Element => {
    const interactionStack = useSelector(getMapInteractionStack);
    const tourlistAreaSelector = useSelector(getToutlistArr);
    const [renderArr, setRenderArr] = useState<RenderPropsType[]>([]);
    useEffect(() => {
        const itemKeys = Object.keys(tourlistAreaSelector.item);
        if (itemKeys.length > 0 && tourlistAreaSelector.recommand.length > 0) {
            const newRenderData: RenderPropsType[] = [];
            if (interactionStack.length === 0) {
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

    const onClick = console.log;

    return (
        <>
            {renderArr.map((props) => (
                <Marker key={props.contentId} onClick={onClick} {...props} />
            ))}
        </>
    );
};

export default KakaoMapMarkerContainer;
