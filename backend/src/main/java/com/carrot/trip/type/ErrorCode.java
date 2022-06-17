package com.carrot.trip.type;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
@AllArgsConstructor
public enum ErrorCode {
    // COMMON
    NOT_DEFINED("A001", "정의 되지 않은 에러입니다."),
    NULL_POINT("A002", "null point 에러 입니다."),

    // USER
    USER_NONE("U001", "존재하지 않는 사용자입니다."),
    LOGIN_INPUT_INVALID("U002", "전화번호, 성함, 비밀번호를 확인해주세요."),
    NICKNAME_DUPLICATION("U003", "동일한 닉네임의 사용자가 존재합니다."),

    // FRIEND
    ALREADY_FRIEND("F001", "이미 친구입니다."),
    DO_NOT_FRIEND_MYSELF("F002", "스스로와 친구는 할 수 없습니다."),

    // BENEFIT CATEGORY
    IS_NOT_2_CATOTEGORIES("BC001", "두개의 카테고리를 지정해야 합니다."),
    IS_NOT_SAME_NICKNAME("BC002", "요청한 카테고리 2개에 대해 가입하고자하는 사용자의 닉네임이 다릅니다."),
    NOT_EXIST_CATEGORY("BC003", "존재하지 않는 카테고리가 있습니다."),

    // TRADING
    NOT_ENOUGH_ACCOUNT_MONEY("T001", "계좌 잔고가 부족합니다."),
    NOT_ENOUGH_POINT("T002", "포인트가 부족합니다."),

    // COMPANY
    ALREADY_LIKE("C001", "이미 좋아요를 눌렀습니다."),

    // PRODUCT
    NOT_EXIST_PRODUCT("P001", "해당 상품은 존재하지 않습니다."),

    // RETAIL_PRODUCT
    NOT_EXIST_RETAIL_PRODUCT("R001", "해당 소매상품은 존재하지 않습니다."),

    // IMAGE
    UPLOAD_IMAGE_COUNT("I001", "업로드 이미지 개수가 맞지 않습니다.(메인이미지 1개, 썸네일 1개 있어야 합니다)"),
    ;

    private final String code;
    private final String message;
}
