import { ThemeProvider } from '@mui/material/styles';
import App from 'component/App';
import GlobalStyles from 'globalstyle';
import globalTheme from 'globaltheme';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'redux/rootStore';
import reportWebVitals from './reportWebVitals';
import 'i18n';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={globalTheme}>
            <GlobalStyles />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
