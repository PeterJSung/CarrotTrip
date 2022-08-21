import { Typography } from '@mui/material';
import styled from 'styled-components';
import { UpdateReviewVO } from 'vo/review';
import DefaultPageContainer from './DefaultPageContainer';

const WarningText = styled(Typography)`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.05em;
    color: #dc3a37;
    margin-bottom: 1.25rem;
`;

type ReqParams = 'placeName' | 'contentTypeId' | 'src' | 'contentId';

type ReqSet = Pick<UpdateReviewVO, ReqParams>;
type ChangeSet = Omit<UpdateReviewVO, ReqParams>;

const EditMbtiPage = (): JSX.Element => {
    return (
        <DefaultPageContainer>
            <div>Edit MBTI</div>
        </DefaultPageContainer>
    );
};

export default EditMbtiPage;
