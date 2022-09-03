import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LocaleCode, LocaleStandardText } from 'vo/locale';
import CommonHeaderFooterComponent from './CommonHeaderFooterComponent';

const Checker = () => (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3.5L4.5 7L10.5 1" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const EditLanguagePage = (): JSX.Element => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState<string>(i18n.language);

    const navigator = useNavigate();

    const onBackButtonClick = () => {
        navigator(-1);
    };
    const onBottomButtonClick = async () => {
        if (i18n.language !== lang) {
            // 다를경우만 요청
            i18n.changeLanguage(lang);
        }
        // 언어 다를경우 처음부터 재로그인해야하나? 이런거도 세팅필요
    };

    const onClick = (code: LocaleCode) => {
        setLang(code);
    };

    return (
        <CommonHeaderFooterComponent
            bottom={{
                text: t('common.dosave'),
                callBack: onBottomButtonClick,
            }}
            title={{
                text: t('languagesetting.title'),
                callBack: onBackButtonClick,
            }}
            isNonMargin={true}
        >
            <List
                style={{
                    padding: 0,
                }}
            >
                {LocaleStandardText.map((d, idx) => (
                    <Fragment key={idx}>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => onClick(d.code)}>
                                <LocaleTypo primary={d.text} />
                                {d.code === lang && <Checker />}
                            </ListItemButton>
                        </ListItem>
                    </Fragment>
                ))}
                <Divider />
            </List>
        </CommonHeaderFooterComponent>
    );
};

export default EditLanguagePage;

const LocaleTypo = styled(ListItemText)`
    & span {
        font-family: Noto Sans KR !important;
        font-style: normal !important;
        font-weight: 500 !important;
        font-size: 16px !important;
        line-height: 23px !important;
        color: #191919 !important;
    }
`;
