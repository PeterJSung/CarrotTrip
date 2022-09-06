import { retrievePlaceDetail } from 'api/placedetail';
import DetailPlace, { DetailPlaceProps } from 'component/basic/Detail/DetailPlace';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useThunk } from 'redux/common';
import { getPlaceDetailData, getStackData, updateInetractionStack } from 'redux/mapinteractionstack';
import { getSuggestionListArr } from 'redux/tourlistarea';
import { getUserName } from 'redux/userInfo';
import styled from 'styled-components';
import { PlaceDetailInfo } from 'vo/mapInteraction';
import { PlaceMBTIInfo } from 'vo/placeInfo';

const PlaceDetailSheet = styled(BottomSheet)`
    & > div {
        width: 100%;
    }
    & [data-rsbs-header] {
        display: flex;
        position: absolute;
        width: 100%;
        box-shadow: unset !important;
        height: 1rem;
    }
    & [data-rsbs-overlay] {
        overflow: hidden;
    }
`;

const BottomSheetPlaceDetailContainer = (): JSX.Element => {
    const placeDeatilInfo = useSelector(getPlaceDetailData);
    const totalDataArr = useSelector(getSuggestionListArr);
    const { i18n } = useTranslation();

    const mapStack = useSelector(getStackData);
    const userName = useSelector(getUserName);

    const [renderData, setRenderData] = useState<Omit<DetailPlaceProps, 'onReset'>>();

    const updateThunk = useThunk(updateInetractionStack);

    const onBackClick = () => {
        updateThunk('pop');
    };

    useEffect(() => {
        onReset();
    }, [placeDeatilInfo, mapStack]);

    const loadData = async (detailData: PlaceDetailInfo) => {
        const idx = totalDataArr[detailData.eventTypeId].findIndex((d) => d.contentId === detailData.id);
        const item = totalDataArr[detailData.eventTypeId][idx];
        const data = await retrievePlaceDetail(item.contentId, i18n.language);
        console.log(data);
        let mbtiArr: PlaceMBTIInfo[] = [];
        for (const idxKey in data.mbtiRanking) {
            mbtiArr.push({
                mbtiStr: idxKey,
                score: data.mbtiRanking[idxKey],
            });
        }

        mbtiArr = mbtiArr.sort((b, a) => a.score - b.score);
        setRenderData({
            contentId: item.contentId,
            userName,
            address: item.addr,
            description: data.overview,
            mbtiArr,
            comments: data.commentList.filter((d) => d.comments !== undefined),
            tasteList: data.tasteList,
            name: item.title,
            src: item.src,
            type: item.contentTypeId,
        });
    };

    const onReset = () => {
        placeDeatilInfo && loadData(placeDeatilInfo);
    };

    return (
        <>
            {renderData && (
                <PlaceDetailSheet
                    open={!!placeDeatilInfo}
                    onDismiss={onBackClick}
                    // onDismiss={() => props.setOpen(true)}
                    blocking={false}
                    snapPoints={({ maxHeight }) => [maxHeight * 0.8]}
                >
                    <DetailPlace {...renderData} onReset={onReset} />
                </PlaceDetailSheet>
            )}
        </>
    );
};

export default BottomSheetPlaceDetailContainer;
