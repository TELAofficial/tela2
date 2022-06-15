import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "src/store";
import { Router } from 'react-router-dom';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Component {...pageProps} />
      </Router>
    </Provider>
  );
}

export default MyApp;
