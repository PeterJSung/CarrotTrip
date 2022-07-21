import { restGet } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { TourListRetrieveRes } from 'vo/travelInfo';

export const TOURLIST_INFO_URL: string = genAPIURLtoBackend('/api/touristAttraction/list');
// lat = y lng = x
export const retriveTourareaAPI = async (
    lng: number,
    lat: number,
    name: string,
    locale: string,
): Promise<TourListRetrieveRes> => {
    const response = await restGet<{}, TourListRetrieveRes>(
        `${TOURLIST_INFO_URL}/x/${lng}/y/${lat}/nickname/${name}/language/${locale}`,
    );
    return response.data;
};
