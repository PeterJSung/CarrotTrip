export const pause = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('test');
            resolve();
        }, ms);
    });
};

export const someBigComplexData = async () => {
    await pause(10000);
};
