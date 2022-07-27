import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import CommonSheetBanner from './CommonSheetBanner';

export interface BannerRecommandStartProps {
    addressText: string;
}

const DEFAULT_SIZE = 5;
const DFAULT_COLOR = '#5981EC';

const BlankBackground = styled(Box)`
    background: #f3f5f7 !important;
    border-radius: 0.5rem important;
    display: flex;
    margin-right: 0.75rem;
    width: ${DEFAULT_SIZE}rem !important;
    height: ${DEFAULT_SIZE}rem !important;
    min-width: ${DEFAULT_SIZE}rem !important;
    min-height: ${DEFAULT_SIZE}rem !important;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
`;

const StartTypo = styled.span`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: -0.05em;
    color: ${DFAULT_COLOR};
`;

const AddressTypo = styled.span`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #191919;
`;

const MarkerIcon = () => (
    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 28C11 28 21.5 20.3636 21.5 11.4545C21.5 8.41661 20.3938 5.5031 18.4246 3.35496C16.4555 1.20681 13.7848 0 11 0C8.21523 0 5.54451 1.20681 3.57538 3.35496C1.60625 5.5031 0.5 8.41661 0.5 11.4545C0.5 20.3636 11 28 11 28ZM14.5 10.5C14.5 12.433 12.933 14 11 14C9.067 14 7.5 12.433 7.5 10.5C7.5 8.567 9.067 7 11 7C12.933 7 14.5 8.567 14.5 10.5Z"
            fill={DFAULT_COLOR}
        />
    </svg>
);

const BannerRecommandStart = (props: BannerRecommandStartProps): JSX.Element => {
    const { t } = useTranslation();

    return (
        <CommonSheetBanner>
            <Box display="flex">
                <BlankBackground>
                    <Box textAlign="center">
                        <MarkerIcon />
                        <StartTypo>{t('common.start')}</StartTypo>
                    </Box>
                </BlankBackground>
                <Box display="flex" alignItems="center">
                    <AddressTypo>{props.addressText}</AddressTypo>
                </Box>
            </Box>
        </CommonSheetBanner>
    );
};

export default BannerRecommandStart;
