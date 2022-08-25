// it is standard locale code FROM http://www.lingoes.net/en/translator/langcode.htm
export enum LocaleCode {
    KOKR = 'KorService',
    ENUS = 'EngService',
    JAJP = 'JpnService',
    ZHHS = 'ChsService', // 중문간체
    ZHCH = 'ChtService', // 중문번체
    DEDE = 'GerService',
    FRFR = 'FreService',
    ESES = 'SpnService',
    RURU = 'RusService',
}

type StandardTextType = {
    code: LocaleCode;
    text: string;
};

export const LocaleStandardText: StandardTextType[] = [
    { code: LocaleCode.KOKR, text: '한국어' },
    { code: LocaleCode.ENUS, text: 'English' },
    { code: LocaleCode.JAJP, text: '日本語' },
    { code: LocaleCode.ZHHS, text: '简体中文' },
    { code: LocaleCode.ZHCH, text: '繁體中文' },
    { code: LocaleCode.DEDE, text: 'Deutsch' },
    { code: LocaleCode.FRFR, text: 'Français' },
    { code: LocaleCode.ESES, text: 'Español' },
    { code: LocaleCode.RURU, text: 'Русский' },
];

export const DEFAULT_LOCALE_CODE: LocaleCode = LocaleCode.KOKR;
