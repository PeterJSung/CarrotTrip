/* 멤버(회원) 정보 */
INSERT INTO member (name, nickname, password, phone_number, mbti, point) VALUES('이태호', '태호', '000000', '010-1111-1234', 'INTJ', 0);
INSERT INTO member (name, nickname, password, phone_number, mbti, point) VALUES('김가현', '가현', '000000', '010-2222-1234', 'INTJ', 0);
INSERT INTO member (name, nickname, password, phone_number, mbti, point) VALUES('김영현', '영현', '000000', '010-3333-1234', 'ENTJ', 0);
INSERT INTO member (name, nickname, password, phone_number, mbti, point) VALUES('성정민', '정민', '000000', '010-4444-1234', 'ESTJ', 0);
INSERT INTO member (name, nickname, password, phone_number, mbti, point) VALUES('', '테스터', '000000', '010-4444-1234', 'INTJ', 0);

/* 인증 정보 */
INSERT INTO member_roles (member_id, roles) VALUES(1, 'ROLE_USER');
INSERT INTO member_roles (member_id, roles) VALUES(2, 'ROLE_USER');
INSERT INTO member_roles (member_id, roles) VALUES(3, 'ROLE_USER');
INSERT INTO member_roles (member_id, roles) VALUES(4, 'ROLE_USER');

/* 멤버의 취향(인상) 정보 */
INSERT INTO member_taste (member_nickname, taste_code) VALUES('태호', '2');
INSERT INTO member_taste (member_nickname, taste_code) VALUES('태호', '3');

/* 더미 평가 */
INSERT INTO member_taste (member_nickname, taste_code) VALUES ('테스터', 3);
INSERT INTO member_taste (member_nickname, taste_code) VALUES ('테스터', 5);

INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('테스터', 128767, 4, '2022-07-25 00:00:00');
INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('테스터', 127585, 3, '2022-07-25 00:00:00');
INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('테스터', 125502, 2, '2022-07-25 00:00:00');

INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('태호', 128767, 5, '2022-07-25 00:00:00');
INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('태호', 127585, 4.5, '2022-07-25 00:00:00');
INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('태호', 125502, 4, '2022-07-25 00:00:00');

INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('가현', 128767, 2, '2022-07-25 00:00:00');
INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('가현', 127585, 1.5, '2022-07-25 00:00:00');
INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('가현', 125502, 0.5, '2022-07-25 00:00:00');

INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('영현', 128767, 0.5, '2022-07-25 00:00:00');
INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('영현', 127585, 1, '2022-07-25 00:00:00');
INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('영현', 125502, 1.5, '2022-07-25 00:00:00');

INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('정민', 128767, 1, '2022-07-25 00:00:00');
INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('정민', 127585, 3, '2022-07-25 00:00:00');
INSERT INTO evaluation (member_nickname, api_id, score, reg_dt) VALUES ('정민', 125502, 2, '2022-07-25 00:00:00');

/* 북마크 등록 */
INSERT INTO bookmark (member_nickname, api_id) VALUES ('태호', 9991);
INSERT INTO bookmark (member_nickname, api_id) VALUES ('태호', 9992);
INSERT INTO bookmark (member_nickname, api_id) VALUES ('태호', 9993);

