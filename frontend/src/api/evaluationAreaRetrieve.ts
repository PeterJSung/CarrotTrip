import { restGet } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { LocaleCode } from 'vo/locale';
import { EvaluationAreaRes } from 'vo/signup';

export const ID_EVALUATION_AREA_URL: string = genAPIURLtoBackend('/api/evaluation/dummy/lang');

export const getEvaluationArea = async (locale: LocaleCode): Promise<EvaluationAreaRes[]> => {
    const response = await restGet<{}, EvaluationAreaRes[]>(`${ID_EVALUATION_AREA_URL}/${locale}`);
    return response.data;
};
