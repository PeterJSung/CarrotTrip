import { restGet } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { LocaleCode } from 'vo/locale';
import { TourListRetrieveRes } from 'vo/travelInfo';

export const TOURLIST_INFO_URL: string = genAPIURLtoBackend('/api/touristAttraction/list');
// lat = y lng = x
export const getUserExist = async (
    lng: number,
    lat: number,
    name: string,
    locale: LocaleCode,
): Promise<TourListRetrieveRes> => {
    const response = await restGet<{}, TourListRetrieveRes>(
        `${TOURLIST_INFO_URL}/x/${lng}/y/${lat}/nickname/${name}/language/${locale}`,
    );
    console.log(response.data);
    return response.data;
};
