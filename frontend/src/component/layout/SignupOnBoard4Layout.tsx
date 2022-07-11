import SelectChipDisplay from 'component/basic/Signup/SelectChipDisplay';
import { getImpressionAllData, SelectChipVO } from 'component/basic/Signup/signupconstants';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useThunk } from 'redux/common';
import { singupInfo1, updateInfo4 } from 'redux/signupInfo';
import SignupCommonLayout from './SignupCommonLayout';

const SignupOnBoard4Layout = (): JSX.Element => {
    const { t } = useTranslation();
    const [chipArr, setChipArr] = useState<SelectChipVO[]>(getImpressionAllData(t));
    const nickName = useSelector(singupInfo1).userInfo?.nickName;
    const updateData = useThunk(updateInfo4);

    const onClick = (id: number) => {
        setChipArr(
            chipArr.map((eachData) => {
                const newData = { ...eachData };
                if (newData.code === id) {
                    newData.checked = !newData.checked;
                }
                return newData;
            }),
        );
    };

    useEffect(() => {
        const slectedId: number[] = chipArr.filter((data) => data.checked).map((data) => data.code);
        updateData({
            disp: {
                buttonText: '다음',
                isDisable: slectedId.length === 0,
            },
            userInfo: slectedId,
        });
    }, [chipArr]);

    console.log(`Render Layout 4`);

    return (
        <SignupCommonLayout
            upperText={`${nickName}님에 대해 알려주세요`}
            lowerText={'수집한 정보는 여행지 추천에 사용될 예정이에요.'}
        >
            <SelectChipDisplay data={chipArr} onClick={onClick} />
        </SignupCommonLayout>
    );
};

export default memo(SignupOnBoard4Layout);
