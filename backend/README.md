# API 명세
## 1. 회원가입 페이지 (Onboarding_01)
### 1.1 닉네임 중복체크
#### URI
``GET`` ``/api/join/isExistNickname``
#### Request
```json
{
    "nickName": "태호"
}
```
#### Response
```json
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": true
}
```
data가 false면 현재 서버에 아이디가 존재하지 않는 것이므로 가입할 수 있다.

### 1.2 회원가입
#### URI
``POST`` ``/api/join``
#### Request
```json
{
    "nickname" : "양지동피바라기",
    "password" : "000000",
    "mbti" : "INTJ"
}
```
#### Response
```json
{
    "nickname": "양지동피바라기",
    "password": "000000",
    "mbti": "INTJ"
}
```

### 1.3 로그인
#### URI
``POST`` ``/api/login``
#### Request
```json
{
    "nickname" : "태호",
    "password" : "000000"
}
```
#### Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiLtg5ztmLgiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjU1NDc0NTkwLCJleHAiOjE2NTU1NjA5OTB9.3WK2rtd1iD-LusVcNTnrkBGB6yi1vO-IL2dhy2ZghIE"
}
```
응답으로 토큰을 발급 받은 뒤에는 헤더에 JWT 토큰을 포함하여 통신하면 된다.

키 : X-AUTH-TOKEN

밸류 : {JWT TOKEN}

## 2. 기본 평가 페이지 (Onboarding_02)
###  2.1 특정 관광지에 대한 별점, 코멘트 등록
#### URI
``POST`` ``/api/evaluation/score``
#### Header
Content-Type: application/json

X-AUTH-TOKEN: {JWT TOKEN}
#### Request
```json
{
    "memberNickname" : "태호",
    "touristAttractionId" : "1",
    "score" : 10,
    "comments" : "좋아요~"   
}
```
#### Response
```json
{
    "memberNickname": "태호",
    "touristAttractionId": "1",
    "score": 10,
    "comments": "좋아요~"
}
```

###  2.2 특정 관광지에 대한 성향 등록
#### URI
``POST`` ``/api/evaluation/taste/touristAttraction``
#### Header
Content-Type: application/json

X-AUTH-TOKEN: {JWT TOKEN}
#### Request
```json
{
    "memberNickname" : "태호",
    "touristAttractionId" : "1",
    "tasteCode" : "A0001"
}
```
#### Response
```json
{
    "memberNickname" : "태호",
    "touristAttractionId" : "1",
    "tasteCode" : "A0001"
}
```