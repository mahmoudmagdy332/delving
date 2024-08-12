import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import { ColorModeContext, useMode } from './Theme'
import { Provider as ReduxProvider } from "react-redux";
import {RouterProvider, useLocation} from "react-router-dom";

import routes from "./app/router";


import { store } from "./app/store";

function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
       <CssBaseline />
      <ReduxProvider store={store}>
     
       <RouterProvider router={routes} /> 
     
   </ReduxProvider>
      </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default App
