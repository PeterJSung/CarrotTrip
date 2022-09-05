import DetailBackBtn from 'component/basic/KakaoMap/DetailBackBtn';
import DetailBookMarkBtn from 'component/basic/KakaoMap/DetailBookMarkBtn';

import { useSelector } from 'react-redux';
import { bookMarkSelector, createBookMark, deleteBookMark } from 'redux/bookmark';
import { useThunk } from 'redux/common';
import { getPlaceDetailData, updateInetractionStack } from 'redux/mapinteractionstack';
import { getUserName } from 'redux/userInfo';
import CommonIndicator from './CommonIndicator';

const IndicatorDetailPlace = (): JSX.Element => {
    const interactionThunk = useThunk(updateInetractionStack);
    const userName = useSelector(getUserName);
    const bookMarkInfo = useSelector(bookMarkSelector);
    const dataTwo = useSelector(getPlaceDetailData);
    const createBookMarkThunk = useThunk(createBookMark);
    const deleteBookMarkThunk = useThunk(deleteBookMark);

    const onBackClick = () => {
        interactionThunk('pop');
    };

    if (!dataTwo) {
        return <></>;
    }

    const isBookMarked = bookMarkInfo[dataTwo.id] !== undefined;

    const onBookmarkClick = () => {
        // setIsMakred(!isMakred);
        if (isBookMarked) {
            deleteBookMarkThunk(userName, dataTwo.id);
        } else {
            createBookMarkThunk(userName, dataTwo.id);
        }
    };

    return (
        <CommonIndicator>
            <DetailBackBtn onClick={onBackClick} />
            <DetailBookMarkBtn onClick={onBookmarkClick} isMarked={bookMarkInfo[dataTwo.id] !== undefined} />
        </CommonIndicator>
    );
};

export default IndicatorDetailPlace;
