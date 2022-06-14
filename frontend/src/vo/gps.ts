import { DEFAULT_LAT, DEFAULT_LNG } from 'common/constants';

export interface Gps {
    lng: number;
    lat: number;
}

export const DEFAULT_GPS: Gps = {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
};
