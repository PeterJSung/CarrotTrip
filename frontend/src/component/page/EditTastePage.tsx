import SelectChipDisplay from 'component/basic/Signup/SelectChipDisplay';
import { getImpressionAllData, SelectChipVO } from 'component/basic/Signup/signupconstants';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserTasteCodes } from 'redux/userInfo';
import CommonHeaderFooterComponent from './CommonHeaderFooterComponent';

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
            bottom={{
                text: t('common.dosave'),
                callBack: onBottomButtonClick,
            }}
            title={{
                text: t('tasteedit.title'),
                callBack: onBackButtonClick,
            }}
        >
            <SelectChipDisplay data={chipArr} onClick={onClick} />
        </CommonHeaderFooterComponent>
    );
};

export default EditMbtiPage;
