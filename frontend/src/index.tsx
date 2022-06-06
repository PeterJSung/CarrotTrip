import ReactDOM from "react-dom";
import App from "component/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "redux/rootStore";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "globalstyle";

ReactDOM.render((
  <Provider store={store}>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>),
  document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
