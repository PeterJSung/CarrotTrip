import { useNavigate } from 'react-router-dom';

const LoginPage = (): JSX.Element => {
    const nivagate = useNavigate();
    const onClick = () => {
        console.log('Click');
        nivagate('/test');
    };
    console.log(kakao.maps.services);
    return <div onClick={onClick}>Login</div>;
};

export default LoginPage;
