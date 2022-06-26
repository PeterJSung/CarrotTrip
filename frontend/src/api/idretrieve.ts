import axios from 'axios';
import { IdRetrieve } from 'vo/signup';

export const URL: string = '/join/isExistNickname';

export async function getUserProfile(username: string) {
    // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
    const response = await axios.get<IdRetrieve>(URL);
    return response.data; // 데이터 값을 바로 반환하도록 처리합니다.
}
