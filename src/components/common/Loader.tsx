
import { useTheme } from "@emotion/react";
import PropagateLoader from "react-spinners/ClipLoader";
import { ColorModeContext, tokens, useMode } from "../../Theme";
import { useContext } from "react";
const Loader = () => {
  const [theme, colorMode,mode] = useMode();
  const colors = tokens(mode);
  return (
    <PropagateLoader 
     color={colors.gray[900]}
    />
     
  )
}

export default Loader