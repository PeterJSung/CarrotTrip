import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { BLACK_COLOR } from 'globaltheme';
import styled from 'styled-components';
import CommonBtn from '../common/CommonBtn';

export interface SkipDialogProps {
    onClick: (isSkip: boolean) => void;
    open: boolean;
}

const CommonTypo = styled.p`
    font-family: 'Noto Sans KR';
    font-style: normal;
    letter-spacing: -0.5px;
    color: ${BLACK_COLOR};
`;

const HeaderTypo = styled(CommonTypo)`
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
`;

const BodyTypo = styled(CommonTypo)`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`;

const DialogBtn = styled(CommonBtn)`
    width: 40%;
`;

const SkipDialog = (props: SkipDialogProps): JSX.Element => {
    const skipAction = () => {
        props.onClick(true);
    };

    const noSkipAction = () => {
        props.onClick(false);
    };

    return (
        <Dialog
            open={props.open}
            onClose={noSkipAction}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>
                <HeaderTypo>작성중인 내용을 취소하시겠습니까?</HeaderTypo>
            </DialogTitle>
            <DialogContent>
                <BodyTypo>취소 선택 시 작성된 내용은 저장되지 않습니다.</BodyTypo>
            </DialogContent>
            <DialogActions
                style={{
                    justifyContent: 'space-around',
                }}
            >
                <DialogBtn isBlack={false} onClick={noSkipAction}>
                    취소
                </DialogBtn>
                <DialogBtn isBlack={true} onClick={skipAction}>
                    확인
                </DialogBtn>
            </DialogActions>
        </Dialog>
    );
};

export default SkipDialog;
