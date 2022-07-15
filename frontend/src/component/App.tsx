import RouterGuard from 'common/RouterGuard';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
//Slick import
import { getIsLogin } from 'redux/userInfo';
import { PATH_HOME_PAGE, PATH_LOGIN_PAGE, PATH_SIGNUP_LOADING_PAGE, PATH_SIGNUP_PAGE } from './page/common';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import SignupLoadingPage from './page/SignupLoadingPage';
import SignupPage from './page/SignupPage';

const App = (): JSX.Element => {
    const isLogin = useSelector(getIsLogin);
    // when login is true.
    // signup loading page is redirection to /
    // when login is false
    // all of page is redirection to /login
    return (
        <Routes>
            <Route element={<RouterGuard redirectPath={PATH_LOGIN_PAGE} isAllowed={isLogin} />}>
                <Route path={PATH_HOME_PAGE} element={<HomePage />} />
                <Route path="/dashboard" element={<p>This is Dashboard</p>} />
            </Route>
            <Route element={<RouterGuard redirectPath={PATH_HOME_PAGE} isAllowed={!isLogin} />}>
                <Route path={PATH_LOGIN_PAGE} element={<LoginPage />} />
                <Route path={PATH_SIGNUP_PAGE} element={<SignupPage />} />
                <Route path={PATH_SIGNUP_LOADING_PAGE} element={<SignupLoadingPage />} />
            </Route>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
    );
};

export default App;
