import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
//Slick import
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Box>Test</Box>} />
        </Routes>
    );
};

export default App;
