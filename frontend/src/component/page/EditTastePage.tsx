import { Alert, Snackbar } from '@mui/material';
import SelectChipDisplay from 'component/basic/Signup/SelectChipDisplay';
import { getImpressionAllData, SelectChipVO } from 'component/basic/Signup/signupconstants';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useThunk } from 'redux/common';
import { getUserTasteCodes, updateTasteThunk } from 'redux/userInfo';
import CommonHeaderFooterComponent from './CommonHeaderFooterComponent';

const EditTastePage = (): JSX.Element => {
    const { t } = useTranslation();
    const [chipArr, setChipArr] = useState<SelectChipVO[]>(getImpressionAllData(t));
    const userTastedCode = useSelector(getUserTasteCodes);
    const navigator = useNavigate();
    const [open, setOpen] = useState<boolean>(false);
    const updateTaste = useThunk(updateTasteThunk);

    useEffect(() => {
        if (userTastedCode && userTastedCode.length > 0) {
            setChipArr(
                chipArr.map((eachData) => {
                    const newData = { ...eachData };
                    newData.checked = userTastedCode.includes(newData.code);
                    return newData;
                }),
            );
        }
    }, [userTastedCode]);

    const onBackButtonClick = () => {
        navigator(-1);
    };
    const onBottomButtonClick = async () => {
        await updateTaste(chipArr.filter((d) => d.checked).map((d) => d.code));
        setOpen(true);
    };

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
                text: t('tasteedit.title'),
                callBack: onBackButtonClick,
            }}
            disable={chipArr.filter((d) => d.checked).length === 0}
        >
            <SelectChipDisplay data={chipArr} onClick={onClick} />
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {t('myprofile.tastechange')}
                </Alert>
            </Snackbar>
        </CommonHeaderFooterComponent>
    );
};

export default EditTastePage;
