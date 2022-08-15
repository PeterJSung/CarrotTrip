import { useEffect } from 'react';
import { Polyline } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';
import { getCurrentInteractionType, getTypeOneData } from 'redux/mapinteractionstack';
import { getToutlistArr } from 'redux/tourlistarea';

const KakaoMapPoligonContainer = (): JSX.Element => {
    const type = useSelector(getCurrentInteractionType);
    const data = useSelector(getTypeOneData);

    const tourListArr = useSelector(getToutlistArr);
    useEffect(() => {}, []);

    return (
        <>
            {type === 'COURSE' &&
                tourListArr.recommand.sections.map((eachD, idx) => {
                    const selectedData = data?.selectedData?.id;
                    if (
                        selectedData === undefined ||
                        selectedData + 1 === idx ||
                        (selectedData + 1 === tourListArr.recommand.sections.length && idx === selectedData)
                    ) {
                        return (
                            <Polyline
                                key={eachD.data.contentId}
                                path={eachD.vertexList}
                                strokeWeight={4} // 선의 두께 입니다
                                strokeColor={'black'} // 선의 색깔입니다
                                strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                                strokeStyle={'solid'} // 선의 스타일입니다
                            />
                        );
                    }
                })}
        </>
    );
};

export default KakaoMapPoligonContainer;
