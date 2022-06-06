import { Box } from "@mui/material";
import { Map, ZoomControl } from "react-kakao-maps-sdk";
import KakaoMapMarkerList, { MarkerInfo } from "./MarkerList";

export interface KakaoMapNowLocationBtnProps {
    
}

const KakaoMapNowLocationBtn = (props: KakaoMapNowLocationBtnProps): JSX.Element => {
    return (
        <Box display="flex" position="absolute" top="0.5rem" right="0.5rem" width="1.5rem" height="1.5rem" bgcolor="red">
             
        </Box>);
};

export default KakaoMapNowLocationBtn;
