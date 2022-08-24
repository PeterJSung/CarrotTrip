import SignupMBTIContainer from 'component/container/SignupMBTIContainer';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserMbti } from 'redux/userInfo';
import CommonHeaderFooterComponent from './CommonHeaderFooterComponent';

const EditMbtiPage = (): JSX.Element => {
    const { t } = useTranslation();
    const initialValue = useSelector(getUserMbti);
    const [mbtiStr, setMBTIStr] = useState<string | undefined>(initialValue);
    const navigate = useNavigate();

    const onBackButtonClick = () => {
        navigate(-1);
    };

    const onBottomButtonClick = () => {
        console.log('BottomClick');
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
        </CommonHeaderFooterComponent>
    );
};

export default EditMbtiPage;
