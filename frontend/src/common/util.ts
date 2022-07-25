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
