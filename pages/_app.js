import { elementType, object } from "prop-types";
import { Fragment, useEffect } from "react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Restaurant Goût d'Ouest</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

MyApp.propTypes = {
  Component: elementType.isRequired,
  pageProps: object.isRequired,
};
