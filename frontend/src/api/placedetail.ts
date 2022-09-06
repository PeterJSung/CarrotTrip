import { restGet } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { PlaceDetailAPIRes } from 'vo/placeInfo';

export const RETRIEVE_PLACEDETAIL_URL: string = genAPIURLtoBackend('/api/touristAttraction/detail');

export const retrievePlaceDetail = async (contentId: number, lang: string): Promise<PlaceDetailAPIRes> => {
    const response = await restGet<{}, PlaceDetailAPIRes>(`${RETRIEVE_PLACEDETAIL_URL}/${contentId}/lang/${lang}`);
    response.data.commentList = response.data.commentList.filter(
        (d) => !(d.comments === undefined || d.comments.length === 0),
    );
    return response.data;
};
