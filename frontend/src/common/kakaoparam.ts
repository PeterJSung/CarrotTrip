// 안노출 시킬 방법이없음.
// 어차피 Req 로도 보내지고 Kakao SDK 에 path 로 노출됨
const kakaoParam = {
    rest: '392d757f342c7662daaeda1ae8ef0c6c',
};

export const getKakaoAuthHeader = {
    Authorization: `KakaoAK ${kakaoParam.rest}`,
};

export default kakaoParam;
