import SelectChipDisplay from 'component/basic/Signup/SelectChipDisplay';
import { getImpressionAllData, SelectChipVO } from 'component/basic/Signup/signupconstants';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useThunk } from 'redux/common';
import { getSingupInfo1, updateInfo4 } from 'redux/signupInfo';
import SignupCommonLayout from './SignupCommonLayout';

const SignupOnBoard4Layout = (): JSX.Element => {
    const { t } = useTranslation();
    const [chipArr, setChipArr] = useState<SelectChipVO[]>(getImpressionAllData(t));
    const name = useSelector(getSingupInfo1).userInfo?.nickName;
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
                buttonText: t('common.next'),
                isDisable: slectedId.length === 0,
            },
            userInfo: slectedId,
        });
    }, [chipArr]);

    return (
        <SignupCommonLayout
            upperText={t('signup.onboard.four.uppertext', { name })}
            lowerText={t('signup.onboard.four.lowertext')}
        >
            <SelectChipDisplay data={chipArr} onClick={onClick} />
        </SignupCommonLayout>
    );
};

export default memo(SignupOnBoard4Layout);
