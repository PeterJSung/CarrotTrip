import RouterGuard from 'common/RouterGuard';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
//Slick import
import { getIsLogin } from 'redux/userInfo';
import {
    PATH_EDITLANGUAGE_PAGE,
    PATH_EDITMBTI_PAGE,
    PATH_EDITTASTE_PAGE,
    PATH_HOME_PAGE,
    PATH_LANDING_PAGE,
    PATH_MYPROFILE_PAGE,
    PATH_REVIEW_PAGE,
    PATH_SIGNIN_PAGE,
    PATH_SIGNUP_LOADING_PAGE,
    PATH_SIGNUP_PAGE,
} from './page/common';
import EditLanguagePage from './page/EditLanguagePage';
import EditMbtiPage from './page/EditMbtiPage';
import EditTastePage from './page/EditTastePage';
import HomePage from './page/HomePage';
import LandingPage from './page/LandingPage';
import MyProfilePage from './page/MyProfilePage';
import ReviewPage from './page/ReviewPage';
import SigninPage from './page/SigninPage';
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
            <Route path={PATH_SIGNUP_LOADING_PAGE} element={<SignupLoadingPage />} />
            <Route element={<RouterGuard redirectPath={PATH_LANDING_PAGE} isAllowed={isLogin} />}>
                <Route path={PATH_HOME_PAGE} element={<HomePage />} />
                <Route path={PATH_REVIEW_PAGE} element={<ReviewPage />} />
                <Route path={PATH_MYPROFILE_PAGE} element={<MyProfilePage />} />
                <Route path={PATH_EDITTASTE_PAGE} element={<EditTastePage />} />
                <Route path={PATH_EDITMBTI_PAGE} element={<EditMbtiPage />} />
                <Route path={PATH_EDITLANGUAGE_PAGE} element={<EditLanguagePage />} />
            </Route>
            <Route element={<RouterGuard redirectPath={PATH_HOME_PAGE} isAllowed={!isLogin} />}>
                <Route path={PATH_LANDING_PAGE} element={<LandingPage />} />
                <Route path={PATH_SIGNIN_PAGE} element={<SigninPage />} />
                <Route path={PATH_SIGNUP_PAGE} element={<SignupPage />} />
            </Route>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
    );
};

export default App;
