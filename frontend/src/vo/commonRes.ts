export interface CommonResponse<T> {
    statusCode: string;
    message: string;
    data: T;
}
