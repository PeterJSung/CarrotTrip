import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import AvartarGenerator from 'component/basic/common/AvartarGenerator';
import CommonBtn from 'component/basic/common/CommonBtn';
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useThunk } from 'redux/common';
import { deleteUserThunk, signoutThunk } from 'redux/signoutsession';
import { getUserName } from 'redux/userInfo';
import styled from 'styled-components';
import { PATH_EDITLANGUAGE_PAGE, PATH_EDITMBTI_PAGE, PATH_EDITTASTE_PAGE } from './common';
import CommonHeaderFooterComponent from './CommonHeaderFooterComponent';

type DialogType = 'signout' | 'concession';

const Icon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="#C6C6C6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

interface DialogData {
    open: boolean;
    type: DialogType;
}

const MyProfilePage = (): JSX.Element => {
    const { t } = useTranslation();
    const [dialogInfo, setDialogInfo] = useState<DialogData>({
        open: false,
        type: 'concession',
    });
    //const signoutFn = useThunk(sessionOutThunk);
    const signoutFn = useThunk(signoutThunk);
    const deleteUserFn = useThunk(deleteUserThunk);
    const userName = useSelector(getUserName);
    const navigate = useNavigate();

    const onBackButtonClick = () => {
        navigate(-1);
    };

    const onClickConCession = () => {
        setDialogInfo({
            open: true,
            type: 'concession',
        });
    };

    const dataRender = [
        (/**내여행성향 */) => navigate(PATH_EDITTASTE_PAGE),
        (/**내MBTI */) => navigate(PATH_EDITMBTI_PAGE),
        (/**나의리뷰관리 */) => navigate('/'),
        (/**언어 */) => navigate(PATH_EDITLANGUAGE_PAGE),
        (/**signout */) => {
            setDialogInfo({
                open: true,
                type: 'signout',
            });
        },
    ];

    const onClose = () => {
        setDialogInfo({
            ...dialogInfo,
            open: false,
        });
    };

    const onClick = (type: DialogType) => {
        switch (type) {
            case 'concession':
                deleteUserFn();
                break;
            case 'signout':
                signoutFn();
                break;
        }
    };

    return (
        <CommonHeaderFooterComponent
            title={{
                text: t('myprofile.title'),
                callBack: onBackButtonClick,
            }}
            isNonMargin={true}
        >
            <Box display="flex" py="1rem" px="2rem" height="6rem" alignItems="center">
                <Box mr="2rem">
                    <AvartarGenerator sz={4.875} id={userName} />
                </Box>
                <Box display="flex" flexDirection="column">
                    <UserInfoTypo>{t('myprofile.uppertext')}</UserInfoTypo>
                    <UserInfoTypo>{t('myprofile.lowertext', { name: userName })}</UserInfoTypo>
                </Box>
            </Box>
            <List
                style={{
                    padding: 0,
                }}
            >
                {dataRender.map((cb, idx) => (
                    <Fragment key={idx}>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton onClick={cb}>
                                <ListItemText primary={t(`myprofile.menu${idx + 1}`)} />
                                <Icon />
                            </ListItemButton>
                        </ListItem>
                    </Fragment>
                ))}
                <Divider />
            </List>
            <Box display="flex" justifyContent="center" flexGrow="1" alignItems="flex-end" mb="2rem">
                <SignoutTypo onClick={onClickConCession}>{t('myprofile.bottommenu')}</SignoutTypo>
            </Box>

            <Dialog open={dialogInfo.open} onClose={onClose}>
                <Box
                    style={{
                        width: '60vw',
                    }}
                    p="1.875rem 1.25rem 1.25rem"
                    display="flex"
                    flexDirection="column"
                >
                    <Box mb={`${dialogInfo.type === 'concession' ? '0.5625' : '1.8125'}rem`}>
                        <DialogHeadTypo>
                            {t(
                                `myprofile.popup.uppertext.${
                                    dialogInfo.type === 'concession' ? 'secession' : 'signout'
                                }`,
                            )}
                        </DialogHeadTypo>
                    </Box>
                    {dialogInfo.type === 'concession' ? (
                        <Box mb="1.8125rem">
                            <DialogBottomTypo>{t('myprofile.popup.lowertext.secession')}</DialogBottomTypo>
                        </Box>
                    ) : null}

                    <Box display="flex">
                        <CommonBtn
                            style={{
                                flexGrow: 1,
                                marginRight: '1rem',
                            }}
                            isBlack={false}
                            onClick={onClose}
                        >
                            {t('common.cancel')}
                        </CommonBtn>
                        <CommonBtn
                            style={{
                                flexGrow: 1,
                            }}
                            isBlack={true}
                            onClick={() => onClick(dialogInfo.type)}
                        >
                            {t('common.confirm')}
                        </CommonBtn>
                    </Box>
                </Box>
            </Dialog>
        </CommonHeaderFooterComponent>
    );
};

export default MyProfilePage;

const DialogHeadTypo = styled.span`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.5px;
    color: #191919;
`;

const DialogBottomTypo = styled.span`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.5px;
    color: #191919;
`;

const UserInfoTypo = styled.span`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #191919;
`;

const SignoutTypo = styled.span`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.05em;
    color: #c2c2c2;
`;
