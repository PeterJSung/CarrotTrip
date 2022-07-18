import DetailBackBtn from 'component/basic/KakaoMap/DetailBackBtn';
import DetailBookMarkBtn from 'component/basic/KakaoMap/DetailBookMarkBtn';

import { useState } from 'react';
import { useThunk } from 'redux/common';
import { updateInetractionStack } from 'redux/mapinteractionstack';
import CommonIndicator from './CommonIndicator';

const IndicatorDetailPlace = (): JSX.Element => {
    const [isMakred, setIsMakred] = useState<boolean>(false);
    const interactionThunk = useThunk(updateInetractionStack);

    const onBookmarkClick = () => {
        setIsMakred(!isMakred);
    };

    const onBackClick = () => {
        interactionThunk();
    };

    return (
        <CommonIndicator>
            <DetailBackBtn onClick={onBackClick} />
            <DetailBookMarkBtn onClick={onBookmarkClick} isMarked={isMakred} />
        </CommonIndicator>
    );
};

export default IndicatorDetailPlace;
