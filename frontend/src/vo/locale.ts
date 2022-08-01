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

export const DEFAULT_LOCALE_CODE: LocaleCode = LocaleCode.KOKR;
