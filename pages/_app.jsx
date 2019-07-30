import { Container } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import * as firebase from "firebase/app";
import firebaseConfig from "../config/firebase";
import "firebase/auth";
import "firebase/database";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const App = ({ Component, pageProps }) => {
  return (
    <Container>
      <GlobalStyles />
      <Component {...pageProps} />
    </Container>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, customProps: "customProps" };
};

export default App;
