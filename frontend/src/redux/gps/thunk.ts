import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/rootReducer';
import { MyLocationGps } from 'vo/gps';
import { currentGpsUpdate } from './actions';
import { GpsAction } from './reducer';

// ThunkAction 의 Generics 에는 다음 값들을 순서대로 넣어줍니다.
/*
  1. thunk 함수에서 반환하는 값의 타입
  2. 리덕스 스토어의 상태 타입
  3. Extra Argument (https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument)
  4. thunk 함수 내부에서 디스패치 할 수 있는 액션들의 타입
*/

export const updateCurrentGpsThunk = (
    lat: number,
    lng: number,
    regionStr: string,
): ThunkAction<void, RootState, null, GpsAction> => {
    return async (dispatch) => {
        console.log(`Update Chunkt Calle`);
        const nextGps: MyLocationGps = {
            lat,
            lng,
            isDefault: false,
            regionStr,
        };
        await dispatch(currentGpsUpdate(nextGps));
    };
};
