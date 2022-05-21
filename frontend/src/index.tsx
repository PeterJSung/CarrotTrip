import ReactDOM from "react-dom/client";
import App from "@/component/App";

import { Provider } from "react-redux";
import store from "@/redux/rootStore";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from '@/globalstyle'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
