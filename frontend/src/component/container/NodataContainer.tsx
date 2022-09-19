import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const NodataContainer = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Typography>{t('nodata')}</Typography>
        </Box>
    );
};

export default NodataContainer;
