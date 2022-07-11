# 셋업 가이드

### 패키지 설치 : pnpm i

### storybook 로컬실행 : pnpm run storybook

### storybook 빌드 : pnpm run build-storybook

### 로컬 실행 : pnpm run start

### 로컬 빌드 : pnpm run build

# 외부 API

## kakao 네비

https://developers.kakao.com/docs/latest/ko/kakaonavi/rest-api

## kakao Map

https://react-kakao-maps-sdk.jaeseokim.dev/

여러 기능있긴하지만 지원 안하는게 좀있음. 지원 안하는건 외부 Kakao Rest API 이용

## 로컬 좌표변환 (Geo -> 도로명, 기타주소)

https://developers.kakao.com/docs/latest/ko/local/dev-guide

# 외부 개발자 가이드

## 번역관련

기본 작업 디렉토리는 `src/i18n/locales` 의 각 언어 폴더들 (현재 en-us ko-kr 만 지원하므로 두언어만 있음) 내의 `translation.json` 으로 작업.

디테일한 예시는 아래와 같은

```
{
    "test": "It is Test Data",  // 변수 없이 기본 키워드로 설정
    "test_with_variable": "Welcome, {{name}}!" // 외부 변수를 넣고싶다면 {{변수명}} 을 넣어서 작업하면됨.
}
```

## 알고리즘 관련

해당 작업 디렉토리는 `src/common/util.ts` 파일의 `someBigComplexData` 함수 내에 정의해놓았음. 우선은 어떤 데이터가 필요한지 확실하지 않아 데이터입력이 없는데, 외부API 등을 사용해야한다면, 같이 이야기 해보아야함.
