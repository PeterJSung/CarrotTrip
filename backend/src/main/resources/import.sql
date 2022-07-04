/* 멤버(회원) 정보 */
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, MBTI, POINT) VALUES('이태호', '태호', '000000', '010-1111-1234', 'INTJ', 0);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, MBTI, POINT) VALUES('김가현', '가현', '000000', '010-2222-1234', 'INTJ', 0);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, MBTI, POINT) VALUES('김영현', '영현', '000000', '010-3333-1234', 'INTJ', 0);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, MBTI, POINT) VALUES('성정민', '정민', '000000', '010-4444-1234', 'INTJ', 0);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, MBTI, POINT) VALUES('', '추천별점받고싶은자', '000000', '010-4444-1234', 'INTJ', 0);


INSERT INTO MEMBER_ROLES (MEMBER_ID, ROLES) VALUES(1, 'ROLE_USER');
INSERT INTO MEMBER_ROLES (MEMBER_ID, ROLES) VALUES(2, 'ROLE_USER');
INSERT INTO MEMBER_ROLES (MEMBER_ID, ROLES) VALUES(3, 'ROLE_USER');
INSERT INTO MEMBER_ROLES (MEMBER_ID, ROLES) VALUES(4, 'ROLE_USER');


INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('태호', 128767, 10);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('태호', 127585, 9);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('태호', 125502, 8);

INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('가현', 128767, 7);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('가현', 127585, 4);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('가현', 125502, 3);
INSERT INTO EVALUATION (MEMBER_NICKNAME, API_ID, SCORE) VALUES ('가현', 225502, 1);


