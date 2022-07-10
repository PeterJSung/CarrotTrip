import { getEvaluationArea } from 'api/evaluationArea';
import SignupBannerContainer from 'component/container/SignupBannerContainer';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useThunk } from 'redux/common';
import { signupInfo2Banner, updateInfo2 } from 'redux/signupInfo';
import styled from 'styled-components';
import { LocaleCode } from 'vo/locale';
import { EvaluationAreaRes, SignupBanner2Data, SignupInfo2Data } from 'vo/signup';
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
    const getSignupInfo2Banner: SignupBanner2Data = useSelector(signupInfo2Banner);

    console.log(renderData);
    const totalDataCount = renderData.length;
    const remainCount = Object.keys(getSignupInfo2Banner).length;
    const needNextSeletCount = totalDataCount - remainCount;
    const lowerText =
        needNextSeletCount > 0 ? `${needNextSeletCount}개를 더 선택해주세요.` : '선택할 것이 남아있지 않습니다.';

    useEffect(() => {
        updateSignupInfo({
            disp: {
                buttonText: '',
                isDisable: false,
            },
            userInfo: [],
        });
        const fetch = async () => {
            getEvaluationArea(i18n.language as LocaleCode).then((res) => {
                setRenderData(res);
            });
        };
        fetch();
        console.log(`Init Call`);
    }, []);

    useEffect(() => {
        console.log(`Effect Call`);
        const selectedData: SignupInfo2Data[] = [];
        for (const key in getSignupInfo2Banner) {
            const numberId = Number(key);
            selectedData.push({
                id: numberId,
                attraction: [...getSignupInfo2Banner[numberId].attraction],
                score: getSignupInfo2Banner[numberId].score,
            });
        }

        updateSignupInfo({
            disp: {
                buttonText: `${remainCount}/${totalDataCount}개 입력`,
                isDisable: false,
            },
            userInfo: selectedData,
        });
    }, [getSignupInfo2Banner, renderData]);

    console.log(`Layout Render 2`);
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
