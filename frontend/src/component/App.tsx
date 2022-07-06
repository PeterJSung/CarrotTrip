import { Route, Routes } from 'react-router-dom';
//Slick import
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SignupPage from './page/SignupPage';
const Test = () => {
    let navigate = useNavigate();
    function handleClick() {
        navigate('/signup');
    }

    return <div onClick={handleClick}>aa</div>;
};

const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    );
};

export default App;
