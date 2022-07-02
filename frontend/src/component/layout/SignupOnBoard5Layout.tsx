import SelectChipDisplay from 'component/basic/Signup/SelectChipDisplay';
import { getImpressionInfo, SelectChipVO } from 'component/basic/Signup/signupconstants';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { singupInfo1 } from 'redux/signupInfo';
import SignupCommonLayout from './SignupCommonLayout';

const SignupOnBoard5Layout = (): JSX.Element => {
    const { t } = useTranslation();
    const [chipArr, setChipArr] = useState<SelectChipVO[]>(getImpressionInfo(t));
    const nickName = useSelector(singupInfo1).userInfo?.nickName;

    return (
        <SignupCommonLayout
            upperText={`${nickName}님에 대해 알려주세요`}
            lowerText={'수집한 정보는 여행지 추천에 사용될 예정이에요.'}
        >
            <SelectChipDisplay data={chipArr} onClick={console.log} />
        </SignupCommonLayout>
    );
};

export default memo(SignupOnBoard5Layout);
