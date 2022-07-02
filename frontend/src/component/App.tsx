import { Route, Routes } from 'react-router-dom';
//Slick import
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SignupOnBoard1Layout from './layout/SignupOnBoard1Layout';

const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<SignupOnBoard1Layout />} />
        </Routes>
    );
};

export default App;
