import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const BannerWrapper = styled(Box)`
    border: 1px solid rgba(219, 219, 219, 1);
    padding: 0.75rem;
    border-radius: 0.5rem;
`;

const CommonSheetBanner = (props: PropsWithChildren): JSX.Element => {
    return <BannerWrapper>{props.children}</BannerWrapper>;
};

export default CommonSheetBanner;
