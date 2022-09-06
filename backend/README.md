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
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiLtg5ztmLgiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjU5OTU2NTMyLCJleHAiOjE2NjAwNDI5MzJ9.JEEseP2jta1tuR6pAEQY2BR7IyL5G6d4kyCquHjbyRc",
  "nickname": "태호",
  "mbti": "INTJ",
  "tasteList": [
    {
      "id": 1,
      "memberNickname": "태호",
      "tasteCode": "2"
    },
    {
      "id": 2,
      "memberNickname": "태호",
      "tasteCode": "3"
    }
  ]
}
```
응답으로 토큰을 발급 받은 뒤에는 헤더에 JWT 토큰을 포함하여 통신하면 된다.

키 : X-AUTH-TOKEN

밸류 : {JWT TOKEN}

## 2. 기본 평가 페이지 (Onboarding_02)
###  2.1 특정 관광지에 대한 별점, 코멘트 등록/수정
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
해당 API는 수정 목적으로도 사용 가능합니다.
(기존에 데이터가 있다면 제거하고 등록하는 방식입니다)

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
  "apiId" : 13245,
  "tasteCodes" : ["5", "12"]
}
```
#### Response
```json
{
  "apiId": 13245,
  "memberNickname": "태호",
  "tasteCodes": [
    "5",
    "12"
  ]
}
```
tasteCode: 조용한 / 차분한 / 활기있는 / 열정적인 / 모험적인 / 재미있는 / 친근한 / 온화한 / 즉흥적인 / 엉뚱한 / 소심한 / 내성적인 / 복잡한 / 계획적인 / 자연친화적
apiId는 contentId를 의미합니다.
tasteCodes는 스트링 형태로써, 쌍따옴표로 감싸줍니다.

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

###  3.2 사용자의 MBTI 수정
#### URI
``POST`` ``/api/member/mbti``
#### Header
Content-Type: application/json

X-AUTH-TOKEN: {JWT TOKEN}
#### Request
```json
{
  "nickname": "태호",
  "mbti": "ENTP"
}
```
#### Response
```json
{
  "statusCode": "OK",
  "message": "SUCCESS",
  "data": 1
}
```

###  3.3 사용자의 등록 코멘트 조회
#### URI
``GET`` ``/api/member/태호/comments``
#### Header
Content-Type: application/json

X-AUTH-TOKEN: {JWT TOKEN}
#### Response
```json
[
  {
    "id": 412,
    "memberNickname": "태호",
    "apiId": 1753572,
    "score": 4.0,
    "comments": "좋아요~! 4",
    "regDt": "2022-08-21 14:43:49"
  },
  {
    "id": 364,
    "memberNickname": "태호",
    "apiId": 2660539,
    "score": 5.0,
    "comments": "좋아요~! 5",
    "regDt": "2022-08-21 14:43:49"
  },
  {
    "id": 368,
    "memberNickname": "태호",
    "apiId": 1954262,
    "score": 5.0,
    "comments": "좋아요~! 5",
    "regDt": "2022-08-21 14:43:49"
  },
  {
    "id": 372,
    "memberNickname": "태호",
    "apiId": 2744513,
    "score": 1.0,
    "comments": "좋아요~! 1",
    "regDt": "2022-08-21 14:43:49"
  }
]
```


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

###  5.2 관광지 상세페이지
#### URI
``GET`` ``/api/touristAttraction/detail/{contentId}/lang/{lang}``
#### Header
X-AUTH-TOKEN: {JWT TOKEN}
#### Response
```json
{
  "commentList": [
    {
      "id": 16,
      "memberNickname": "태호",
      "apiId": 732484,
      "score": 4.0,
      "comments": "좋아요~! 4",
      "regDt": "2022-07-26 22:17:08"
    },
    {
      "id": 17,
      "memberNickname": "가현",
      "apiId": 732484,
      "score": 2.0,
      "comments": "좋아요~! 2",
      "regDt": "2022-07-26 22:17:08"
    },
    {
      "id": 18,
      "memberNickname": "영현",
      "apiId": 732484,
      "score": 3.0,
      "comments": "좋아요~! 3",
      "regDt": "2022-07-26 22:17:08"
    },
    {
      "id": 19,
      "memberNickname": "정민",
      "apiId": 732484,
      "score": 1.0,
      "comments": "좋아요~! 1",
      "regDt": "2022-07-26 22:17:08"
    }
  ],
  "mbtiRanking": {
    "ESTJ": 1.0,
    "INTJ": 3.0,
    "ENTJ": 3.0
  },
  "tasteList": [
    "2",
    "3",
    "5",
    "8",
    "9"
  ],
  "overview": "가든파이브라이프(Garden5life)는 단순한 쇼핑공간이 아니라 거대한 문화복합단지이다. 쇼핑, 문화, 오락, 휴식 등 원하는 모든 것을 동시에 즐길 수 있으며 패션, 생활용품, 전자제품, 산업 제품, 공구 소재까지 필요한 모든 것을 한 번에 만날 수 있는 곳이다. 생산과 판매, 도매와 소매가 한곳에서 이뤄지는 진정한 원스톱 문화쇼핑을 즐거움을 모두 실현하는 가든파이브는 교통이 복잡한 남대문, 동대문 상권의 한계를 뛰어넘어 러시아, 동남아, 남미 등 세계 고객까지 끌어들인다는 비전으로 미래형 문화특구의 청사진을 실현한다."
}
```
commentList: 해당 관광지에 대한 평가리스트 제공
mbtiRanking: 평가한 MBTI 별 평균별점을 제공
tasteList: 취향코드들을 선택받은 취향이 많은 순서로 제공

## 6. 북마크
###  6.1 북마크 조회
#### URI
``GET`` ``/api/bookmark/{nickname}``
#### Header
X-AUTH-TOKEN: {JWT TOKEN}
#### Response
```json
[
  {
    "id": 1,
    "memberNickname": "태호",
    "apiId": 9991
  },
  {
    "id": 2,
    "memberNickname": "태호",
    "apiId": 9992
  },
  {
    "id": 3,
    "memberNickname": "태호",
    "apiId": 9993
  }
]
```

###  6.2 북마크 등록/수정
#### URI
``POST`` ``/api/bookmark``
#### Header
Content-Type: application/json

X-AUTH-TOKEN: {JWT TOKEN}
#### Request
```json
{
  "memberNickname": "태호",
  "apiId": 10000
}
```
#### Response
```json
{
  "id": 8,
  "memberNickname": "태호",
  "apiId": 10000
}
```

###  6.3 북마크 삭제
#### URI
``DELETE`` ``/api/bookmark``
#### Header
Content-Type: application/json

X-AUTH-TOKEN: {JWT TOKEN}
#### Request
```json
{
  "memberNickname": "태호",
  "apiId": 10000
}
```
#### Response
```json
{
  "memberNickname": "태호",
  "apiId": 10000
}
```

