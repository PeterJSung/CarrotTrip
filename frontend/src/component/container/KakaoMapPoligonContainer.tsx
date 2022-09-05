import { getCurrentInteractionType } from 'common/util';
import { Polyline } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';
import { getSuggestionData } from 'redux/mapinteractionstack';
import { getToutlistArr } from 'redux/tourlistarea';

const KakaoMapPoligonContainer = (): JSX.Element => {
    const suggestionDataInfo = useSelector(getSuggestionData);
    const tourListArr = useSelector(getToutlistArr);

    if (!suggestionDataInfo) {
        return <></>;
    }

    const type = getCurrentInteractionType(suggestionDataInfo.tabIdx);

    return (
        <>
            {type === 'COURSE' &&
                tourListArr.recommand.sections.map((eachD, idx) => {
                    const selectedData = suggestionDataInfo.selectedData?.id;
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
