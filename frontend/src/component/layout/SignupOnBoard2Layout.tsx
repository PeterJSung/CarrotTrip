import { getEvaluationArea } from 'api/evaluationAreaRetrieve';
import SignupBannerContainer from 'component/container/SignupBannerContainer';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useThunk } from 'redux/common';
import { getSignupInfo2Banner, updateInfo2 } from 'redux/signupInfo';
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
    const signupInfo2Banner: SignupBanner2Data = useSelector(getSignupInfo2Banner);

    const totalDataCount = renderData.length;
    const remainCount = Object.keys(signupInfo2Banner).length;
    const remain = totalDataCount - remainCount;
    const lowerText =
        remain > 0
            ? t('signup.onboard.two.lowertext.remainselect', { remain })
            : t('signup.onboard.two.lowertext.normain');

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
    }, []);

    useEffect(() => {
        const selectedData: SignupInfo2Data[] = [];
        for (const key in signupInfo2Banner) {
            const numberId = Number(key);
            selectedData.push({
                id: numberId,
                attraction: [...signupInfo2Banner[numberId].attraction],
                score: signupInfo2Banner[numberId].score,
            });
        }

        updateSignupInfo({
            disp: {
                buttonText: t('common.next'),
                isDisable: false,
            },
            userInfo: selectedData,
        });
    }, [getSignupInfo2Banner, renderData]);

    return (
        <SignupCommonLayout upperText={t('signup.onboard.two.uppertext')} lowerText={lowerText}>
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
