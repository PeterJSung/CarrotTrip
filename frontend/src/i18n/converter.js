// execute with node ./convert.js
// 이 구문은 오직 한국어기반으로 영어 translation.json 의 누락부분을 채우기 위한 것임
// 그이외에는 사용금지
// ko-kr 에있고 en-us 에 키가 있으면 en-us value 그대로사용
// ko-kr 에만 있으면 en-us 에 만들고 "" 로 대체
const fs = require('fs');
const name = __dirname + '\\locales\\en-us\\translation.json';
console.log(name);
const m = JSON.parse(fs.readFileSync(name).toString());
console.log(m);
fs.writeFileSync(name, JSON.stringify(m));
