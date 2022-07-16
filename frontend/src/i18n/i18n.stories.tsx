import { Box, Button, Typography } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import { DEFAULT_LOCALE_CODE, LocaleCode } from 'vo/locale';

const LocaleChange = (): JSX.Element => {
    const { i18n } = useTranslation();
    const onClick = () => {
        if (i18n.language === DEFAULT_LOCALE_CODE) {
            i18n.changeLanguage(LocaleCode.ENUS);
        } else {
            i18n.changeLanguage(DEFAULT_LOCALE_CODE);
        }
    };

    return (
        <Box>
            <Typography>{`현재 언어 ${i18n.language}`}</Typography>
            <Button onClick={onClick}>Change</Button>
        </Box>
    );
};

export default {
    title: 'LocaleChange',
    component: LocaleChange,
} as ComponentMeta<typeof LocaleChange>;

const localeChangeTemplate: ComponentStory<typeof LocaleChange> = () => <LocaleChange />;

export const localeChange = localeChangeTemplate.bind({});
