import { retrievePlaceDetail } from 'api/placedetail';
import DetailPlace, { DetailPlaceProps } from 'component/basic/Detail/DetailPlace';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useThunk } from 'redux/common';
import { getCurrentInteractionType, getTypeTwoData, updateInetractionStack } from 'redux/mapinteractionstack';
import { getSuggestionListArr } from 'redux/tourlistarea';
import { getUserName } from 'redux/userInfo';
import styled from 'styled-components';
import { Interaction3Type } from 'vo/mapInteraction';

const PlaceDetailSheet = styled(BottomSheet)`
    & > div {
        width: 100%;
    }
    & [data-rsbs-header] {
        display: flex;
        position: absolute;
        width: 100%;
        box-shadow: unset !important;
    }
    & [data-rsbs-overlay] {
        overflow: hidden;
    }
`;

const BottomSheetPlaceDetailContainer = (): JSX.Element => {
    const interactionType = useSelector(getCurrentInteractionType);
    const totalDataArr = useSelector(getSuggestionListArr);
    const typeTwo = useSelector(getTypeTwoData);
    const userName = useSelector(getUserName);

    const [renderData, setRenderData] = useState<Omit<DetailPlaceProps, 'onReset'>>();

    const updateThunk = useThunk(updateInetractionStack);
    const isOpen = interactionType === 'PLACEDETAIL';

    const onBackClick = () => {
        updateThunk();
    };

    useEffect(() => {
        onReset();
    }, [typeTwo]);

    const loadData = async (typeTwoData: Interaction3Type) => {
        const idx = totalDataArr[typeTwoData.eventTypeId].findIndex((d) => d.contentId === typeTwoData.id);
        const item = totalDataArr[typeTwoData.eventTypeId][idx];
        const data = await retrievePlaceDetail(item.contentId);
        setRenderData({
            contentId: item.contentId,
            userName,
            address: item.addr,
            description: data.overview,
            mbtiArr: [],
            comments: data.commentList.filter((d) => d.comments !== undefined),
            tasteList: data.tasteList,
            name: item.title,
            src: item.src,
            type: item.contentTypeId,
        });
    };

    const onReset = () => {
        typeTwo && loadData(typeTwo);
    };

    return (
        <>
            {renderData && (
                <PlaceDetailSheet
                    open={isOpen}
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
