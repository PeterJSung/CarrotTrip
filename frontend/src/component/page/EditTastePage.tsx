import { Typography } from '@mui/material';
import SelectChipDisplay from 'component/basic/Signup/SelectChipDisplay';
import { getImpressionAllData, SelectChipVO } from 'component/basic/Signup/signupconstants';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserTasteCodes } from 'redux/userInfo';
import styled from 'styled-components';
import { UpdateReviewVO } from 'vo/review';
import CommonHeaderFooterComponent from './CommonHeaderFooterComponent';

const WarningText = styled(Typography)`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.05em;
    color: #dc3a37;
    margin-bottom: 1.25rem;
`;

type ReqParams = 'placeName' | 'contentTypeId' | 'src' | 'contentId';

type ReqSet = Pick<UpdateReviewVO, ReqParams>;
type ChangeSet = Omit<UpdateReviewVO, ReqParams>;

const EditMbtiPage = (): JSX.Element => {
    const { t } = useTranslation();
    const [chipArr, setChipArr] = useState<SelectChipVO[]>(getImpressionAllData(t));
    const userTastedCode = useSelector(getUserTasteCodes);

    useEffect(() => {
        if (userTastedCode && userTastedCode.length > 0) {
            setChipArr(
                chipArr.map((eachData) => {
                    const newData = { ...eachData };
                    if (userTastedCode.includes(newData.code)) {
                        newData.checked = !newData.checked;
                    }
                    return newData;
                }),
            );
        }
    }, [userTastedCode]);

    const onBackButtonClick = () => {};
    const onBottomButtonClick = () => {};

    const onClick = (id: number) => {
        setChipArr(
            chipArr.map((eachData) => {
                const newData = { ...eachData };
                if (newData.code === id) {
                    newData.checked = !newData.checked;
                }
                return newData;
            }),
        );
    };

    return (
        <CommonHeaderFooterComponent
            onBackButtonClick={onBackButtonClick}
            onBottomButtonClick={onBottomButtonClick}
            titleText={t('tasteedit.title')}
            buttonText={t('common.dosave')}
        >
            <SelectChipDisplay data={chipArr} onClick={onClick} />
        </CommonHeaderFooterComponent>
    );
};

export default EditMbtiPage;
