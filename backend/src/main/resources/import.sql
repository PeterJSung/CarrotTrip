/* 멤버(회원) 정보 */
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, MBTI, POINT) VALUES('이태호', '태호', '000000', '010-1111-1234', 'INTJ', 0);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, MBTI, POINT) VALUES('김가현', '가현', '000000', '010-2222-1234', 'INTJ', 0);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, MBTI, POINT) VALUES('김영현', '영현', '000000', '010-3333-1234', 'ENTJ', 0);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, MBTI, POINT) VALUES('성정민', '정민', '000000', '010-4444-1234', 'ESTJ', 0);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, MBTI, POINT) VALUES('', '테스터', '000000', '010-4444-1234', 'INTJ', 0);

/* 인증 정보 */
INSERT INTO MEMBER_ROLES (MEMBER_ID, ROLES) VALUES(1, 'ROLE_USER');
INSERT INTO MEMBER_ROLES (MEMBER_ID, ROLES) VALUES(2, 'ROLE_USER');
INSERT INTO MEMBER_ROLES (MEMBER_ID, ROLES) VALUES(3, 'ROLE_USER');
INSERT INTO MEMBER_ROLES (MEMBER_ID, ROLES) VALUES(4, 'ROLE_USER');

/* 더미 평가 */
INSERT INTO MEMBER_TASTE (MEMBER_NICKNAME, TASTE_CODE) VALUES ('테스터', 3);
INSERT INTO MEMBER_TASTE (MEMBER_NICKNAME, TASTE_CODE) VALUES ('테스터', 5);

INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('테스터', 128767, 4);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('테스터', 127585, 3);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('테스터', 125502, 2);

INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('태호', 128767, 10);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('태호', 127585, 9);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('태호', 125502, 8);

INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('가현', 128767, 4);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('가현', 127585, 3);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('가현', 125502, 1);

INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('영현', 128767, 1);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('영현', 127585, 2);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('영현', 125502, 3);

INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('정민', 128767, 2);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('정민', 127585, 6);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('정민', 125502, 4);



