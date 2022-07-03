import { Box } from '@mui/material';
import SelectSquareBoxGrid from 'component/basic/Signup/SelectSquareBoxGrid';
import { getPlaceInfo, SelectBoxVO } from 'component/basic/Signup/signupconstants';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useThunk } from 'redux/common';
import { updateInfo3 } from 'redux/signupInfo';
import SignupCommonLayout from './SignupCommonLayout';

const SignupOnBoard3Layout = (): JSX.Element => {
    const { t } = useTranslation();
    const [placeArr, setPlaceArr] = useState<SelectBoxVO[]>(getPlaceInfo(t));
    const updateData = useThunk(updateInfo3);

    const onClick = (id: number) => {
        setPlaceArr(
            placeArr.map((eachData) => {
                const newObj = { ...eachData };
                if (newObj.code === id) {
                    newObj.checked = !newObj.checked;
                }
                return newObj;
            }),
        );
    };

    useEffect(() => {
        const selectedId: number[] = placeArr.filter((d) => d.checked).map((d) => d.code);
        updateData({
            disp: {
                buttonText: '다음',
                isDisable: selectedId.length === 0,
            },
            userInfo: selectedId,
        });
    }, [placeArr]);

    return (
        <SignupCommonLayout
            upperText={`어떤 장소를 찾고 있나요?`}
            lowerText={'수집한 정보는 여행지 추천에 사용될 예정이에요.'}
        >
            <Box width="100%" position="relative">
                <SelectSquareBoxGrid colCount={4} data={placeArr} onClick={onClick} />
            </Box>
        </SignupCommonLayout>
    );
};

export default memo(SignupOnBoard3Layout);
