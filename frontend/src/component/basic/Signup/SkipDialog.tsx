import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { BLACK_COLOR } from 'globaltheme';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
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
                <HeaderTypo>{t('signup.skipdialog.title')}</HeaderTypo>
            </DialogTitle>
            <DialogContent>
                <BodyTypo>{t('signup.skipdialog.description')}</BodyTypo>
            </DialogContent>
            <DialogActions
                style={{
                    justifyContent: 'space-around',
                }}
            >
                <DialogBtn isBlack={false} onClick={noSkipAction}>
                    {t('common.cancel')}
                </DialogBtn>
                <DialogBtn isBlack={true} onClick={skipAction}>
                    {t('common.confirm')}
                </DialogBtn>
            </DialogActions>
        </Dialog>
    );
};

export default SkipDialog;
