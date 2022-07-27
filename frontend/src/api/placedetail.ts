import { restGet } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { PlaceDetailAPIRes } from 'vo/placeInfo';

export const RETRIEVE_PLACEDETAIL_URL: string = genAPIURLtoBackend('/api/touristAttraction/detail');

export const retrievePlaceDetail = async (contentId: number): Promise<PlaceDetailAPIRes> => {
    const response = await restGet<{}, PlaceDetailAPIRes>(`${RETRIEVE_PLACEDETAIL_URL}/${contentId}`);
    return response.data;
};
