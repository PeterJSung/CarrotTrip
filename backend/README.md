# API 명세
## 1. 회원가입 페이지 (Onboarding_01)
### 1.1 닉네임 중복체크
#### URI
``GET`` ``/api/join/isExistNickname/{nickname}``
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
    "apiId" : 12341,
    "tasteCode" : "1"
}
```
#### Response
```json
{
    "memberNickname" : "태호",
    "apiId" : 12341,
    "tasteCode" : "1"
}
```
tasteCode: 조용한 / 차분한 / 활기있는 / 열정적인 / 모험적인 / 재미있는 / 친근한 / 온화한 / 즉흥적인 / 엉뚱한 / 소심한 / 내성적인 / 복잡한 / 계획적인 / 자연친화적
apiId는 contentId를 의미합니다.
tasteCode는 스트링 형태로써, 쌍따옴표로 감싸줍니다.

###  2.3 관광지 더미 데이터 가져오기
#### URI
``GET`` ``/api/evaluation/dummy/lang/{lang}``
#### Header
Content-Type: application/json

X-AUTH-TOKEN: {JWT TOKEN}
#### Response
```json
[
  {
    "contentId": 128767,
    "name": "을왕리해수욕장",
    "address": "인천광역시 중구 용유서로302번길 16-15",
    "thumbnail1": "http://tong.visitkorea.or.kr/cms/resource/66/2512766_image2_1.jpg",
    "thumbnail2": "http://tong.visitkorea.or.kr/cms/resource/66/2512766_image2_1.jpg"
  },
  {
    "contentId": 127585,
    "name": "월미도",
    "address": "인천광역시 중구 월미문화로 36",
    "thumbnail1": "http://tong.visitkorea.or.kr/cms/resource/71/1577671_image2_1.jpg",
    "thumbnail2": "http://tong.visitkorea.or.kr/cms/resource/71/1577671_image3_1.jpg"
  },
  {
    "contentId": 125502,
    "name": "강화도",
    "address": "인천광역시 강화군 강화읍 강화대로",
    "thumbnail1": "http://tong.visitkorea.or.kr/cms/resource/73/1924973_image2_1.jpg",
    "thumbnail2": "http://tong.visitkorea.or.kr/cms/resource/73/1924973_image3_1.jpg"
  }
]
```
- 국문   KorService
- 영문	EngService
- 일문	JpnService
- 중문간체	ChsService
- 중문번체	ChtService
- 독어(독일어)	GerService
- 불어(프랑스어)	FreService
- 서어(스페인어)	SpnService
- 노어(러시아어)	RusService

## 3. 사용자 선호 카테고리 페이지 (Onboarding_03)
###  3.1 사용자의 선호 관광지 타입 등록 (관광지, 문화시설, 행사/공연/축제, 여행코스, 레포츠, 숙박, 쇼핑, 음식점)
#### URI
``POST`` ``/api/evaluation/category``
#### Header
Content-Type: application/json

X-AUTH-TOKEN: {JWT TOKEN}
#### Request
```json
{
  "memberNickname" : "정민",
  "categoryCodes" : [12, 14]
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
코드 별 코드네임은 CategoryCode.java 참조

## 4. 특정 사용자 대한 성향 등록 페이지 (Onboarding_05)
###  4.1 특정 사용자 대한 성향 등록 (조용한 / 차분한 / 활기있는 / 열정적인 / 모험적인 / 재미있는 / 친근한 / 온화한 / 즉흥적인 / 엉뚱한 / 소심한 / 내성적인 / 복잡한 / 계획적인 / 자연친화적)
#### URI
``POST`` ``/api/evaluation/taste/member``
#### Header
Content-Type: application/json

X-AUTH-TOKEN: {JWT TOKEN}
#### Request
```json
{
  "memberNickname" : "정민",
  "tasteCodes" : [1, 2, 4]
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
코드 별 코드네임은 TasteCode.java 참조

## 5. 메인화면 (지도)
###  5.1 위치기반 주변 관광지 및 예상별점 받기 (업데이트 예정 : MBTI 추천 정보)
#### URI
``GET`` ``/api/touristAttraction/list/x/{경도 (ex)127.1625892}/y/{위도 (ex)37.4587305}/nickname/{nickName}/language/{lang}``
#### Header
Content-Type: application/json

X-AUTH-TOKEN: {JWT TOKEN}
#### Response
```json
{
  "response": {
    "body": {
      "items": {
        "item": [
          {
            "addr1": "서울특별시 송파구 충민로 66",
            "areacode": 1,
            "cat1": "A04",
            "cat2": "A0401",
            "cat3": "A04010600",
            "contentid": 732484,
            "contenttypeid": 38,
            "createdtime": 20090511234754,
            "dist": 4067,
            "firstimage": "http://tong.visitkorea.or.kr/cms/resource/78/1920578_image2_1.jpg",
            "firstimage2": "http://tong.visitkorea.or.kr/cms/resource/78/1920578_image3_1.jpg",
            "mapx": 127.1229354097,
            "mapy": 37.4770061292,
            "mlevel": 6,
            "modifiedtime": 20220324165652,
            "readcount": 16603,
            "sigungucode": 18,
            "title": "가든파이브라이프(Garden5life)",
            "recommendScore": 7.0,
            "mbti": "ESTJ",
            "mbtiAveScore": 9.0,
            "aveScore": 5.75,
            "tasteList": [
              "3",
              "5"
            ],
            "userTaste": true            
          },
          {
            "addr1": "서울특별시 송파구 중대로10길 42",
            "areacode": 1,
            "cat1": "A04",
            "cat2": "A0401",
            "cat3": "A04010600",
            "contentid": 987584,
            "contenttypeid": 38,
            "createdtime": 20100326145236,
            "dist": 4944,
            "firstimage": "http://tong.visitkorea.or.kr/cms/resource/12/1000812_image2_1.jpg",
            "firstimage2": "http://tong.visitkorea.or.kr/cms/resource/12/1000812_image3_1.jpg",
            "mapx": 127.1238488274,
            "mapy": 37.4906934463,
            "mlevel": 6,
            "modifiedtime": 20211104155245,
            "readcount": 9251,
            "sigungucode": 18,
            "title": "K2 (문정점)",
            "recommendScore": 9.0,
            "mbti": "ESTJ",
            "mbtiAveScore": 5.0,
            "aveScore": 2.25,
            "tasteList": [
              "2",
              "8",
              "9"
            ],
            "userTaste": false            
          }
        ],
        "recommendCourseItem": [
          {
            "addr1": "경기도 성남시 수정구 태평로55번길 72",
            "areacode": 31,
            "cat1": "A02",
            "cat2": "A0201",
            "cat3": "A02010800",
            "contentid": 304794,
            "contenttypeid": 12,
            "createdtime": 20071129201521,
            "dist": 2342,
            "firstimage": "http://tong.visitkorea.or.kr/cms/resource/47/2021847_image2_1.jpg",
            "firstimage2": "http://tong.visitkorea.or.kr/cms/resource/47/2021847_image3_1.jpg",
            "mapx": 127.137076459,
            "mapy": 37.453439674,
            "mlevel": 6,
            "modifiedtime": 20220325112707,
            "readcount": 26178,
            "sigungucode": 12,
            "title": "망경암",
            "recommendScore": 10.0,
            "mbti": "ESTJ",
            "mbtiAveScore": 10.0,
            "aveScore": 7.5,
            "tasteList": [
              "2",
              "8",
              "9"
            ],
            "userTaste": false
          }
        ]
      },
      "numOfRows": 100,
      "pageNo": 1,
      "totalCount": 82
    },
    "header": {
      "resultCode": "0000",
      "resultMsg": "OK"
    }
  }
}
```
recommendScore가 예상별점을 의미한다.
mbti는 해당 관광지와 제일 잘 맞는 MBTI를 의미한다.
mbtiAveScore는 그 MBTI들의 평균점수를 의미한다.
aveScore는 해당 관광지에 대한 평균별점을 의미한다.
tasteList는 해당 관광지에 대해 평가된 관광지 성향 리스트를 의미한다.
userTaste는 해당 관광지의 성향리스트를 기반으로 사용자의 성향과 부합되는 관광지 여부를 의미한다.
recommendCourseItem은 추천코스 탭을 위한 데이터를 추려낸 아이템리스트이다.
