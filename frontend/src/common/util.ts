import { KakaoRegionAPIRes } from 'vo/gps';
import { specializeContentId, Suggestion_Event_Type } from 'vo/travelInfo';

export const pause = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

export const someBigComplexData = async () => {
    await pause(10000);
};

export const calculateLatLngDistance = (oLat: number, oLng: number, cLat: number, cLng: number): number => {
    const X = ((Math.cos(oLat) * 6400 * 2 * Math.PI) / 360) * Math.abs(oLng - cLng);
    const Y = 111 * Math.abs(oLat - cLat);
    return Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2));
};

export const reAdjustmantKMnM = (distance: number): { unit: 'KM' | 'M'; dist: number } => {
    const unit: 'KM' | 'M' = distance >= 1000 ? 'KM' : 'M';
    let dist = distance;
    if (unit === 'KM') {
        dist = parseFloat((dist / 1000).toFixed(2));
    }
    return { dist, unit };
};

export const parserRegionStr = (apiRes: KakaoRegionAPIRes) => {
    let retData = apiRes.documents.filter((d) => d.region_type === 'H');
    if (!retData) {
        retData = apiRes.documents.filter((d) => d.region_type === 'B');
    }
    const shortAddress = `${retData[0].region_1depth_name}, ${retData[0].region_3depth_name}`;
    const fullAddress = retData[0].address_name;
    return { shortAddress, fullAddress };
};

export const getGeoLocationInfo = (cb: (lat: number, lng: number) => void) => {
    const options: PositionOptions = { timeout: 6000 };
    navigator.geolocation &&
        navigator.geolocation.getCurrentPosition(
            (position) => {
                cb(position.coords.latitude, position.coords.longitude);
            },
            console.error,
            options,
        );
};

export const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
};

export const getCurrentInteractionType = (tabIdx: number): Suggestion_Event_Type => {
    if (specializeContentId.includes(tabIdx)) {
        return 'FILTER';
    } else if (tabIdx === 300) {
        return 'ETC';
    } else if (tabIdx === 200) {
        return 'MBTI';
    } else if (tabIdx === 100) {
        return 'COURSE';
    } else if (tabIdx === 400) {
        return 'TENDENCY';
    } else {
        throw Error('Error not included tab idx');
    }
};

export const genHashFromStr = (str: string) => {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
        const chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};
