import { Code } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useRef, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { RefHandles } from 'react-spring-bottom-sheet/dist/types';
import styled from 'styled-components';

export interface KakaoMapBottomSheetContainerProps {
    open: boolean;
    mode: number;
}

const MainSheet = styled(BottomSheet)`
    & > div {
        width: 95%;
        margin: auto;
    }
`;

const KakaoMapBottomSheetContainer = (props: KakaoMapBottomSheetContainerProps): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    //const markers: MarkerInfo[] = [];

    const mapRef = useRef<kakao.maps.Map>(null);

    const [staticMode, setStaticMode] = useState<boolean>(false);
    const bottomSheetRef = useRef<RefHandles>(null);

    return (
        <BottomSheet
            open={open}
            onDismiss={() => setOpen(false)}
            blocking={false}
            header={
                <input
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0"
                    type="text"
                    placeholder="Text input field in a sticky header"
                />
            }
            defaultSnap={1}
            snapPoints={({ maxHeight }) => {
                if (staticMode) {
                    console.log(`Itis static Mode`);
                    return [maxHeight * 0.8];
                } else {
                    console.log(`Not StaticMode`);
                    return [maxHeight * 0.4, maxHeight * 0.95];
                }
            }}
        >
            <Button onClick={() => setStaticMode(!staticMode)}>Test</Button>
            <p>
                When <Code>blocking</Code> is <Code>false</Code> it's possible to use the Bottom Sheet as an height
                adjustable sidebar/panel.
            </p>
            <p>
                You can combine this with <Code>onDismissable</Code> to fine-tune the behavior you want.
            </p>
        </BottomSheet>
    );
};

export default KakaoMapBottomSheetContainer;
