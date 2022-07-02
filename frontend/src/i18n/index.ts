import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUS from './locales/en-us';
import koKR from './locales/ko-kr';

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        debug: true,
        resources: {
            koKR,
            enUS,
        },
        lng: 'koKR', // if you're using a language detector, do not define the lng option
        fallbackLng: 'koKR',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
