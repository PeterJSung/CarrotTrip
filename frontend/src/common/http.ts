// react를 기준으로 작성
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
const http = Axios.create({
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    },
});

const restGet = async <Req = any, Res = any>(
    url: string,
    config?: AxiosRequestConfig<Req>,
): Promise<AxiosResponse<Res>> => {
    return (await http.get(url, config)).data;
};

const restDelete = async <Req = any, Res = any>(
    url: string,
    config?: AxiosRequestConfig<Req>,
): Promise<AxiosResponse<Res>> => {
    return (await http.delete(url, config)).data;
};

const restPost = async <Req = any, Res = any>(
    url: string,
    config?: AxiosRequestConfig<Req>,
): Promise<AxiosResponse<Res>> => {
    return (await http.post(url, config)).data;
};

const restPut = async <Req = any, Res = any>(
    url: string,
    config?: AxiosRequestConfig<Req>,
): Promise<AxiosResponse<Res>> => {
    return (await http.post(url, config)).data;
};

export { restPut, restGet, restDelete, restPost };
