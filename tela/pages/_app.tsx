import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { createMemoryHistory } from 'history';

function MyApp({ Component, pageProps }: AppProps) {
  const history = createMemoryHistory();

  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
