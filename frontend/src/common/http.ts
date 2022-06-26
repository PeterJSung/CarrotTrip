// react를 기준으로 작성
import Axios from 'axios';
const http = Axios.create({
    timeout: 3000,
});

export default http;
