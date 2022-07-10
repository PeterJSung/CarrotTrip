import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import styled from 'styled-components';

export interface SkipDialogProps {
    onClick: (isSkip: boolean) => void;
    open: boolean;
}

const CommonTypo = styled.p`
    font-family: 'Noto Sans KR';
    font-style: normal;
    letter-spacing: -0.5px;
    color: #191919;
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

const ConfirmBtn = styled(Button)<{ isBlack: boolean }>`
    background-color: ${(p) => (p.isBlack ? `#191919` : 'white')};
    color: ${(p) => (p.isBlack ? 'white' : `#191919`)};
    border-radius: 0.5rem;
    width: 40%;
    border: 0.15rem solid #191919;
    &:hover {
        background-color: ${(p) => (p.isBlack ? 'rgba(25,25,25,0.75)' : `#1976d20a`)};
    }
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
                <ConfirmBtn isBlack={false} onClick={noSkipAction}>
                    취소
                </ConfirmBtn>
                <ConfirmBtn isBlack={true} onClick={skipAction}>
                    다음
                </ConfirmBtn>
            </DialogActions>
        </Dialog>
    );
};

export default SkipDialog;
