import { restPost } from 'common/http';
import { getKakaoAuthHeader } from 'common/kakaoparam';
import { KakaoNaviAPIReqBody, KakaoNaviAPIRes, NaviPoint } from 'vo/gps';

// 중간 경유지 필수로 있는 API 임. 왜냐하면... 여행지정보의 총 출발지부터 도착지까지 전부 있어야하기 때문
export const FIND_NAVIGATION_URL: string = 'https://apis-navi.kakaomobility.com/v1/waypoints/directions';

export const getTourNaviInfo = async (myPos: NaviPoint, tourPos: NaviPoint[]): Promise<KakaoNaviAPIRes> => {
    const waypoints: NaviPoint[] = tourPos.length > 1 ? tourPos.slice(0, -1) : [];
    const destination: NaviPoint = tourPos[tourPos.length - 1];
    const response = await restPost<KakaoNaviAPIReqBody, KakaoNaviAPIRes>(
        FIND_NAVIGATION_URL,
        {
            avoid: ['motorway'],
            origin: myPos,
            destination,
            waypoints,
        },
        {
            headers: {
                ...getKakaoAuthHeader,
            },
        },
    );
    return response.data;
};
