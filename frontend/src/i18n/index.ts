import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LOCALE_CODE, LocaleCode } from 'vo/locale';

import enUS from './locales/en-us';
import koKR from './locales/ko-kr';

const resources: Resource = {};
const localeKeys: string[] = Object.values(LocaleCode);

localeKeys.forEach((eachData: string) => {
    if (eachData === DEFAULT_LOCALE_CODE) {
        resources[eachData] = koKR;
    } else {
        resources[eachData] = enUS;
    }
});

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources,
        lng: localStorage.getItem('SET_LOCALE') || DEFAULT_LOCALE_CODE, // if you're using a language detector, do not define the lng option
        fallbackLng: DEFAULT_LOCALE_CODE,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
