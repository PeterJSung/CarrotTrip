import SuggestionItemList from 'component/basic/BottomSheet/SuggestionItemList';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bookMarkSelector } from 'redux/bookmark';
import { useThunk } from 'redux/common';
import { updateInetractionStack } from 'redux/mapinteractionstack';
import { getSuggestionListArr, getToutlistArr } from 'redux/tourlistarea';
import { TourlistDataset } from 'vo/travelInfo';
import { PATH_BOOKMARK_PAGE, PATH_MYPROFILE_PAGE } from './common';
import CommonHeaderFooterComponent from './CommonHeaderFooterComponent';

const Checker = () => (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3.5L4.5 7L10.5 1" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ShowBookMarkPage = (): JSX.Element => {
    const { t } = useTranslation();
    const bookMakrs = useSelector(bookMarkSelector);
    const originDatas = useSelector(getSuggestionListArr);
    const tourData = useSelector(getToutlistArr);
    //const updateRedirect = useThunk(updateRedirectPage);
    const updateStack = useThunk(updateInetractionStack);
    //const oneData = useSelector(getTypeOneData);

    const [data, setData] = useState<TourlistDataset[]>([]);

    const navigator = useNavigate();

    const onBackButtonClick = () => {
        navigator(-1);
    };

    const onListClick = async (id: number) => {
        await updateStack('push', {
            type: 'Redirect',
            data: {
                pathArr: [PATH_MYPROFILE_PAGE, PATH_BOOKMARK_PAGE],
            },
        });

        let eventTypeId = 0;

        const itemKeys = Object.keys(tourData.item);

        itemKeys.forEach((eachKey) => {
            tourData.item[eachKey].forEach((eachD, idx) => {
                if (eachD.contentId === id) {
                    eventTypeId = eachD.eventTypeId;
                }
            });
        });

        await updateStack('push', {
            type: 'PlaceDetail',
            data: {
                eventTypeId,
                id,
            },
        });
        navigator(-2);
    };

    useEffect(() => {
        console.log(originDatas);
        const bookMarkKeys = Object.keys(bookMakrs);
        if (bookMarkKeys.length > 0 && Object.keys(originDatas).length > 0) {
            const newData: TourlistDataset[] = [];
            for (const key in originDatas) {
                originDatas[key].forEach((eachData) => {
                    if (bookMarkKeys.includes(`${eachData.contentId}`)) {
                        newData.push(eachData);
                    }
                });
            }
            setData(newData);
        }
    }, [bookMakrs, originDatas]);

    return (
        <CommonHeaderFooterComponent
            title={{
                text: t('myprofile.menu3'),
                callBack: onBackButtonClick,
            }}
        >
            <SuggestionItemList dataSet={data} onListClick={onListClick} />
        </CommonHeaderFooterComponent>
    );
};

export default ShowBookMarkPage;
