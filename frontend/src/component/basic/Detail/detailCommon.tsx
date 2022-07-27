import { TFunction } from 'i18next';
import styled from 'styled-components';
import { AttractionDataSet, i18n_IMPRESSION_REF } from 'vo/travelInfo';

// this code is based from https://github.com/EliEladElrom/react-tutorials/blob/master/bubble-chart/src/components/BubbleChart/BubbleChart.tsx

const CommonText = styled.p`
    font-family: 'Noto Sans KR';
    font-style: normal;
`;

const BigHeadText = styled(CommonText)`
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    margin-bottom: 0.5rem;
`;

const SmallHeadText = styled(CommonText)`
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    margin-bottom: 0.5rem;
`;

const DescriptionText = styled(CommonText)`
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.025em;
`;

const bigHeadText = (text: string): JSX.Element => <BigHeadText>{text}</BigHeadText>;
const smallHeadText = (text: string): JSX.Element => <SmallHeadText>{text}</SmallHeadText>;
const descriptionText = (text: string): JSX.Element => <DescriptionText>{text}</DescriptionText>;

const getImpressionSpecificData = (t: TFunction, data: string[]): AttractionDataSet[] => {
    const ret: AttractionDataSet[] = [];
    for (const key in i18n_IMPRESSION_REF) {
        if (data.includes(key)) {
            ret.push({
                color: i18n_IMPRESSION_REF[key].color,
                translateKey: t(i18n_IMPRESSION_REF[key].translateKey), //it`ll be converted from i18n
            });
        }
    }
    return ret;
};

export { bigHeadText, smallHeadText, descriptionText, getImpressionSpecificData };
