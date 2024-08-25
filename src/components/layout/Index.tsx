import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./header/Index"
import { Box, Toolbar } from "@mui/material"
const Index = () => {
  return (
    <Box  >
      <Header />
       <Box className="min-h-screen">
       <Toolbar className="h-20"/>
       <Outlet />
       </Box>
      <Footer/>
    </Box>
  )
}

export default Index