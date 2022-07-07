import RouterGuard from 'common/RouterGuard';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
//Slick import
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from 'redux/userInfo';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import SignupLoadingPage from './page/SignupLoadingPage';
import SignupPage from './page/SignupPage';
const Test = () => {
    let navigate = useNavigate();
    function handleClick() {
        navigate('/signup');
    }

    return <div onClick={handleClick}>aa</div>;
};

const App = (): JSX.Element => {
    const userInfo = useSelector(getUserInfo);
    // when login is true.
    // signup loading page is redirection to /
    // when login is false
    // all of page is redirection to /login
    return (
        <Routes>
            <Route element={<RouterGuard redirectPath="/login" isAllowed={userInfo} />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<p>This is Dashboard</p>} />
            </Route>
            <Route element={<RouterGuard redirectPath="/" isAllowed={!userInfo} />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/loading" element={<SignupLoadingPage />} />
            </Route>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
    );
};

export default App;
