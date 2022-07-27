import { DEFAULT_LAT, DEFAULT_LNG } from 'common/constants';

export interface PosInfo {
    lng: number;
    lat: number;
}

export type LocationInfo = {
    zoom: number;
} & PosInfo;

export type MyLocationGps = Omit<LocationInfo, 'zoom'> & {
    regionStrShort: string;
    regionStrFull: string;
    isDefault: boolean;
};

export interface GpsInformation {
    current: MyLocationGps;
}

export const DEFAULT_GPS: MyLocationGps = {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
    isDefault: true,
    regionStrShort: '',
    regionStrFull: '',
};

export interface KakaoRegionAPIRes {
    meta: { total_count: number };
    documents: Array<KakaoRegionInfo>;
}

export interface KakaoRegionInfo {
    region_type: 'B' | 'H';
    code: string;
    address_name: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    region_4depth_name: string;
    x: number;
    y: number;
}

export interface KakaoNaviAPIReqBody {
    avoid: NaviAvoidType[];
    origin: NaviPoint; // 현재 내 GPS 위치
    destination: NaviPoint; // 여행지의 맨 끝
    waypoints: NaviPoint[]; // 맨끝을 제외한 여행지 순서대로 넣기
}

export interface KakaoNaviAPIRes {
    trans_id: string;
    routes: NaviRoute[];
}

interface NaviRoute {
    result_code: number;
    result_msg: string;
    summary: NaviSummary;
    sections: NaviSecion[];
}

interface NaviRoad {
    name: string;
    distance: number;
    duration: number;
    traffic_speed: number;
    traffic_state: number;
    vertexes: number[];
}

interface NaviGuide {
    name: string;
    x: number;
    y: number;
    distance: number;
    duration: number;
    type: number;
    guidance: string;
    road_index: number;
}

interface NaviBound {
    min_x: number;
    min_y: number;
    max_x: number;
    max_y: number;
}

type NaviAvoidType = 'roadevent' | 'ferries' | 'toll' | 'schoolzone' | 'motorway';
type NaviPriorityType = 'RECOMMEND' /* 추천(Default) */ | 'TIME' /* 최단시간 */ | 'DISTANCE'; /* 최단경로 */

interface NaviFare {
    taxi: number;
    toll: number;
}

export interface NaviPoint {
    name?: String;
    x: number;
    y: number;
}

interface NaviSummary {
    origin: NaviPoint;
    destination: NaviPoint;
    waypoints: NaviPoint[];
    priority: NaviPriorityType;
    bound: NaviBound;
    fare: NaviFare;
    distance: number;
    duration: number;
}

interface NaviSecion {
    distance: number;
    duration: number;
    bound: NaviBound;
    roads: NaviRoad[];
    guides: NaviGuide[];
}
