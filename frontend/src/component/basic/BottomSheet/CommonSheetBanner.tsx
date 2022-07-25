import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const BannerWrapper = styled(Box)`
    padding: 0.75rem;
    flex-grow: 1;
`;

const CommonSheetBanner = (props: PropsWithChildren): JSX.Element => {
    return <BannerWrapper>{props.children}</BannerWrapper>;
};

export default CommonSheetBanner;
