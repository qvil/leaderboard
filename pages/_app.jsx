import { Container } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";

const App = ({ Component, pageProps, customProps }) => {
  console.log("TCL: App -> customProps", customProps);
  return (
    <Container>
      <GlobalStyles />
      <Component customProps={customProps} {...pageProps} />
    </Container>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  console.log("TCL: App.getInitialProps -> ctx", ctx);
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, customProps: "customProps" };
};

export default App;
