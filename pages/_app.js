import { Container } from "@mui/material";
import { Provider } from "react-redux";
import Navigation from "../src/components/organisms/navigation/navigation";
import configureStore from "../src/redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={configureStore()}>
        <Navigation />
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    </>
  );
}

export default MyApp;
