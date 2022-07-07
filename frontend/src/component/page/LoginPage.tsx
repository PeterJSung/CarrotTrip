import { useNavigate } from 'react-router-dom';

const LoginPage = (): JSX.Element => {
    const nivagate = useNavigate();
    const onClick = () => {
        console.log('Click');
        nivagate('/test');
    };
    return <div onClick={onClick}>Login</div>;
};

export default LoginPage;
