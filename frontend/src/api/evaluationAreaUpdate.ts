import { restPost } from 'common/http';
import { genAPIURLtoBackend } from 'component/basic/common/util';
import { PlaceUpdateAttractInfoReqRes, PlaceUpdateScoreNCommentInfoReqRes } from 'vo/placeInfo';

export const SCORE_N_COMMENT_AREA_URL: string = genAPIURLtoBackend('/api/evaluation/score');
export const ATTRACT_AREA_URL: string = genAPIURLtoBackend('/api/evaluation/taste/touristAttraction');

export const updateEvaluationScoreNComment = async (
    memberNickname: string,
    apiId: number,
    score: number,
    comments?: string,
): Promise<PlaceUpdateScoreNCommentInfoReqRes> => {
    const response = await restPost<PlaceUpdateScoreNCommentInfoReqRes, PlaceUpdateScoreNCommentInfoReqRes>(
        SCORE_N_COMMENT_AREA_URL,
        {
            memberNickname,
            apiId,
            score,
            comments,
        },
    );
    return response.data;
};

export const updateEvaluationAttract = async (
    memberNickname: string,
    apiId: number,
    tasteArr: number[],
): Promise<PlaceUpdateAttractInfoReqRes> => {
    const response = await restPost<PlaceUpdateAttractInfoReqRes, PlaceUpdateAttractInfoReqRes>(ATTRACT_AREA_URL, {
        memberNickname,
        apiId,
        tasteCodes: tasteArr,
    });
    return response.data;
};
