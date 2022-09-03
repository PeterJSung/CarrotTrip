import { Alert, Snackbar } from '@mui/material';
import SignupMBTIContainer from 'component/container/SignupMBTIContainer';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useThunk } from 'redux/common';
import { getUserMbti, updateMBTIThunk } from 'redux/userInfo';
import CommonHeaderFooterComponent from './CommonHeaderFooterComponent';

const EditMbtiPage = (): JSX.Element => {
    const { t } = useTranslation();
    const initialValue = useSelector(getUserMbti);
    const [mbtiStr, setMBTIStr] = useState<string | undefined>(initialValue);
    const navigate = useNavigate();
    const updateMBTI = useThunk(updateMBTIThunk);

    const [open, setOpen] = useState<boolean>(false);

    const onBackButtonClick = () => {
        navigate(-1);
    };

    const onBottomButtonClick = async () => {
        if (mbtiStr) {
            await updateMBTI(mbtiStr);
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <CommonHeaderFooterComponent
            bottom={{
                text: t('common.dosave'),
                callBack: onBottomButtonClick,
            }}
            title={{
                text: t('mbtiedit.title'),
                callBack: onBackButtonClick,
            }}
        >
            <SignupMBTIContainer firstValue={initialValue} onMBTIChange={setMBTIStr} />
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {t('myprofile.mbtichange', { mbti: mbtiStr })}
                </Alert>
            </Snackbar>
        </CommonHeaderFooterComponent>
    );
};

export default EditMbtiPage;
