import { Box } from '@mui/material';
import BackArrowBtn from 'component/basic/common/BackArrowBtn';
import CommonBtn from 'component/basic/common/CommonBtn';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import DefaultPageContainer from './DefaultPageContainer';

interface Info {
    text: string;
    callBack: () => void;
}

interface CommonHeaderFooterComponentProps {
    title: Info;
    bottom?: Info;
    isNonMargin?: boolean;
}

const TitleTypo = styled.span`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.05em;
`;

const CommonHeaderFooterComponent = (props: PropsWithChildren<CommonHeaderFooterComponentProps>): JSX.Element => {
    const margin = props.isNonMargin ? 0 : 1;
    console.log(props.bottom);
    return (
        <DefaultPageContainer>
            <Box position="relative">
                <Box
                    zIndex={5}
                    position="relative"
                    style={{
                        float: 'left',
                    }}
                >
                    <BackArrowBtn onClick={props.title.callBack} />
                </Box>

                <Box
                    zIndex="1"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="absolute"
                    left="0"
                    right="0"
                    top="0"
                    bottom="0"
                >
                    <TitleTypo>{props.title.text}</TitleTypo>
                </Box>
            </Box>
            <Box overflow="auto" display="flex" flexDirection="column" flexGrow="1" mx={`${margin}rem`}>
                {props.children}
            </Box>
            {props.bottom && (
                <Box display="flex" m="1.25rem 1.25rem 1.625rem" flexDirection="column">
                    <CommonBtn
                        style={{
                            height: '3rem',
                        }}
                        isBlack={true}
                        onClick={props.bottom.callBack}
                    >
                        {props.bottom.text}
                    </CommonBtn>
                </Box>
            )}
        </DefaultPageContainer>
    );
};

export default CommonHeaderFooterComponent;
