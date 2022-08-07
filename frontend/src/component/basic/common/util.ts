const LOCAL_BACKEND_URL = 'http://localhost:8080';
const PROD_BACKEND_URL = 'https://api.carrottrip.com';

export const genAPIURLtoBackend = (path: string): string => {
    const isDev = process.env.REACT_APP_TARGET === 'dev';
    return `${isDev ? LOCAL_BACKEND_URL : PROD_BACKEND_URL}${path}`;
};
