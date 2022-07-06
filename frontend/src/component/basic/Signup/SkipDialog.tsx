import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';

export interface SkipDialogProps {
    onClick: (isSkip: boolean) => void;
    open: boolean;
}

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
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    현재 정보를 입력하지 않고 다음 페이지로 넘어가시겠습니까?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={noSkipAction}>취소</Button>
                <Button onClick={skipAction}>다음</Button>
            </DialogActions>
        </Dialog>
    );
};

export default SkipDialog;
