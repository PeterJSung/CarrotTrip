import { getEvaluationArea } from 'api/evaluationArea';
import SignupBannerContainer from 'component/container/SignupBannerContainer';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useThunk } from 'redux/common';
import { signupInfo2Banner, updateInfo2 } from 'redux/signupInfo';
import styled from 'styled-components';
import { LocaleCode } from 'vo/locale';
import { EvaluationAreaRes } from 'vo/signup';
import SignupCommonLayout from './SignupCommonLayout';

const BannerWrapper = styled.div`
    :not(:last-child) {
        margin-bottom: 0.75rem;
    }
`;

const SignupOnBoard2Layout = (): JSX.Element => {
    const [renderData, setRenderData] = useState<EvaluationAreaRes[]>([]);
    const { i18n, t } = useTranslation();
    const updateSignupInfo = useThunk(updateInfo2);
    const getSignupInfo2Banner = useSelector(signupInfo2Banner);

    useEffect(() => {
        updateSignupInfo({
            disp: {
                buttonText: '다음',
                isDisable: false,
            },
            userInfo: [],
        });
        const fetch = async () => {
            const resultData = await getEvaluationArea(i18n.language as LocaleCode);
            const newData: EvaluationAreaRes[] = await getEvaluationArea(i18n.language as LocaleCode);
            setRenderData(newData);
            console.log(resultData);
        };
        fetch();
    }, []);

    useEffect(() => {
        updateSignupInfo({
            disp: {
                buttonText: '다음',
                isDisable: false,
            },
            userInfo: [],
        });
    }, [getSignupInfo2Banner]);

    console.log(`Layout render`);
    const needNextSeletCount = renderData.length - Object.keys(getSignupInfo2Banner).length;
    const lowerText =
        needNextSeletCount > 0 ? `${needNextSeletCount}개를 더 선택해주세요.` : '선택할 것이 남아있지 않습니다.';

    return (
        <SignupCommonLayout upperText={'다녀온 관광지를 평가해주세요'} lowerText={lowerText}>
            {renderData.map((data) => {
                return (
                    <BannerWrapper key={data.contentId}>
                        <SignupBannerContainer {...data} />
                    </BannerWrapper>
                );
            })}
        </SignupCommonLayout>
    );
};

export default memo(SignupOnBoard2Layout);
