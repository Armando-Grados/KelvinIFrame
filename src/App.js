import { Fragment, useMemo } from "react";
import { createMuiTheme } from "./theme";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-phone-input-2/lib/material.css";

function App() {
  const theme = useMemo(() => {
    return createMuiTheme("light");
  }, []);
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
      <ToastContainer position="top-right" autoClose={3000} closeOnClick />
    </Fragment>
  );
}

export default App;
