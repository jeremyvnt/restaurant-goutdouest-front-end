import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

export default function WithLayout({
  component: Component,
  layout: Layout,
  ...rest
}) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0}>
        <Layout>
          <Component {...rest} />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
}
