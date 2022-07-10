export const pause = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('test');
            resolve();
        }, ms);
    });
};
console.log(new kakao.maps.services.Geocoder());
export const someBigComplexData = async () => {
    await pause(2500);
};
