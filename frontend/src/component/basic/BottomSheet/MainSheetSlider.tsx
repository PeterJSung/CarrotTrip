import { Chip } from '@mui/material';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { TFunction, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { i18n_SUGGESTION_REF } from 'vo/travelInfo';

export interface MainSheetSliderProps {
    selectedIdx: number;
    onClick: (code: number) => void;
}

const ScrollChip = styled(Chip)`
    margin-right: 0.375rem;
    & > span {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 17px;
        color: #191919;
    }
`;

interface ChipDispInfo {
    title: string;
    code: number;
}

const getSuggestionInfo = (t: TFunction): ChipDispInfo[] => {
    // TODO : it need to import i18n component
    const ret: ChipDispInfo[] = [];
    // code need to setup
    i18n_SUGGESTION_REF.forEach((eachData) => {
        ret.push({
            code: eachData.code,
            title: t(eachData.translateKey),
        });
    });
    return ret;
};

const MainSheetSlider = (props: MainSheetSliderProps): JSX.Element => {
    const { t } = useTranslation();
    const standardData = getSuggestionInfo(t);
    return (
        <ScrollMenu>
            {standardData.map((d) => {
                return (
                    <ScrollChip
                        color={props.selectedIdx === d.code ? 'secondary' : 'info'}
                        clickable
                        key={d.title}
                        label={d.title}
                        onClick={() => props.onClick(d.code)}
                    />
                );
            })}
        </ScrollMenu>
    );
};

export default MainSheetSlider;
