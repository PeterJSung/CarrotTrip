import SignupMBTIContainer from 'component/container/SignupMBTIContainer';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserMbti } from 'redux/userInfo';
import { UpdateReviewVO } from 'vo/review';
import CommonHeaderFooterComponent from './CommonHeaderFooterComponent';

type ReqParams = 'placeName' | 'contentTypeId' | 'src' | 'contentId';

type ReqSet = Pick<UpdateReviewVO, ReqParams>;
type ChangeSet = Omit<UpdateReviewVO, ReqParams>;

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
            buttonText={t('common.dosave')}
            titleText={t('mbtiedit.title')}
            onBackButtonClick={onBackButtonClick}
            onBottomButtonClick={onBottomButtonClick}
        >
            <SignupMBTIContainer firstValue={initialValue} onMBTIChange={setMBTIStr} />
        </CommonHeaderFooterComponent>
    );
};

export default EditMbtiPage;
