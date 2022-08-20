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

    const [renderData, setRenderData] = useState<DetailPlaceProps>();

    const updateThunk = useThunk(updateInetractionStack);
    const isOpen = interactionType === 'PLACEDETAIL';

    const onBackClick = () => {
        updateThunk();
    };

    useEffect(() => {
        const setup = async () => {
            if (typeTwo) {
                const item = totalDataArr[typeTwo.eventTypeId][typeTwo.idx];
                const data = await retrievePlaceDetail(item.contentId);
                console.log(item);
                setRenderData({
                    userName,
                    address: item.addr,
                    description: data.overview,
                    mbtiArr: [],
                    comments: data.commentList,
                    moodArr: data.tasteList,
                    name: item.title,
                    src: item.src,
                    type: item.contentTypeId,
                });
            }
        };
        setup();
    }, [typeTwo]);

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
                    <DetailPlace {...renderData} />
                </PlaceDetailSheet>
            )}
        </>
    );
};

export default BottomSheetPlaceDetailContainer;
