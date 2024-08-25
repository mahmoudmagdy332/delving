import "./App.css";
import { ColorModeContext, useMode } from "./Theme";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import routes from "./app/router";

import { store } from "./app/store";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./app/utils/hooks/queryClient";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReduxProvider store={store}>
          <QueryClientProvider client={queryClient}>
            <ToastContainer />
            <RouterProvider router={routes} />
          </QueryClientProvider>
        </ReduxProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
