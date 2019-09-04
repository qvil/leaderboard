import { Container } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { useRouter } from "next/router";

import LNB from "../components/LNB";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  });
}
const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const { league } = router.query;

  return (
    <Container>
      <GlobalStyles />
      <LNB title={league || "Home"} />
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
