import DetailBackBtn from 'component/basic/KakaoMap/DetailBackBtn';
import DetailBookMarkBtn from 'component/basic/KakaoMap/DetailBookMarkBtn';

import { useState } from 'react';
import CommonIndicator from './CommonIndicator';

const IndicatorDetailPlace = (): JSX.Element => {
    const [isMakred, setIsMakred] = useState<boolean>(false);

    const onClick = () => {
        setIsMakred(!isMakred);
    };

    return (
        <CommonIndicator>
            <DetailBackBtn onClick={console.log} />
            <DetailBookMarkBtn onClick={onClick} isMarked={isMakred} />
        </CommonIndicator>
    );
};

export default IndicatorDetailPlace;
