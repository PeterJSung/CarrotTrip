// react를 기준으로 작성
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
const http = Axios.create({
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
    },
});

const restGet = async <Req = any, Res = any>(
    url: string,
    config?: AxiosRequestConfig<Req>,
): Promise<AxiosResponse<Res>> => {
    return await http.get(url, config);
};

const restDelete = async <Req = any, Res = any>(
    url: string,
    config?: AxiosRequestConfig<Req>,
): Promise<AxiosResponse<Res>> => {
    return await http.delete(url, config);
};

const restPost = async <Req = any, Res = any>(
    url: string,
    data?: Req,
    config?: AxiosRequestConfig<Req>,
): Promise<AxiosResponse<Res>> => {
    return await http.post(url, data, config);
};

const restPut = async <Req = any, Res = any>(
    url: string,
    data?: Req,
    config?: AxiosRequestConfig<Req>,
): Promise<AxiosResponse<Res>> => {
    return await http.post(url, data, config);
};

export { restPut, restGet, restDelete, restPost };
