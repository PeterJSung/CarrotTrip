import { Box } from '@mui/material';
import styled from 'styled-components';
import { MapImageIconProps } from './common';

const ImgComponent = styled.img`
    max-height: 100%;
    max-width: 100%;
    min-height: 100%;
    min-width: 100%;
`;

const SrcIcon = (props: MapImageIconProps): JSX.Element => {
    const isSel = props.isSelected;
    const s = isSel ? 52 : 30;

    return (
        <Box
            m="8px"
            overflow="hidden"
            borderRadius="50%"
            border="2px solid #191919"
            boxSizing="border-box"
            position="relative"
            display="inline-block"
            width={s}
            height={s}
        >
            <ImgComponent src={props.src} />
        </Box>
    );
};

export default SrcIcon;
