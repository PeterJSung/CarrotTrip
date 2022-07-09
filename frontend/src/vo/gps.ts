import { DEFAULT_LAT, DEFAULT_LNG } from 'common/constants';

export interface Gps {
    lng: number;
    lat: number;
}

export const DEFAULT_GPS: Gps = {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
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
