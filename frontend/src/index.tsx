import { ThemeProvider } from '@mui/material/styles';
import App from 'component/App';
import GlobalStyles from 'globalstyle';
import globalTheme from 'globaltheme';
import 'i18n';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store, { persistor } from 'redux/rootStore';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import reportWebVitals from './reportWebVitals';
import './static/bottomsheet/style.css';
import './static/fonts/font.css';

import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={globalTheme}>
                <GlobalStyles />
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
