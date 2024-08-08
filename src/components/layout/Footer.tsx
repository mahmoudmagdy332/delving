import { Box, Typography } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  const theme = useTheme();
  const pages=["Home","Cources","Pricing","Testimonials","Help"]
  const pages2=["Company","About Us","Careers","FAQs"]
  const sosials=[<FaFacebookF/>,<FaXTwitter />,<FaInstagram />, <FaLinkedinIn />]
  return (
    <Box sx={{backgroundColor:"black.dark"}}>
      <div className="w-11/12 lg:w-10/12 mx-auto pt-16">
            <Box className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 ">
              <Box className="col-span-2 flex justify-center items-start lg:justify-start">
              {theme.palette.mode === 'dark' ?   <img src="/images/LOGO/Logo (2) 1.png" className="w-56"/>:<img src="/images/LOGO/icon black 1.png" className="w-56"/>}
              </Box>
            <div className="flex flex-col gap-3 items-center">
              {pages.map((page)=>(
                <Typography sx={{color:"background.default",'&:hover':{}}}>
                {page}
               </Typography>
              ))}
               
            </div> 
            <div className="flex flex-col gap-3 items-center">
              {pages2.map((page)=>(
                <Typography sx={{color:"background.default",'&:hover':{}}}>
                {page}
               </Typography>
              ))}
               
            </div>  
            <div className="flex gap-4 col-span-2 lg:col-span-1  justify-center lg:justify-end ">
              {sosials.map((sosial)=>(
                <Box sx={{color:"background.default",fontSize:"18px"}}>
                  {sosial}
              </Box>
              ))}
            
           
          </div>  
            </Box> 
            <Box className="my-5 flex flex-col lg:flex-row gap-4 justify-between py-5 border-t">
               <div className="flex gap-4">
               <Typography sx={{color:"grey.light"}}>Terms of Services</Typography>
               <Typography sx={{color:"grey.light"}}>Privacy policy </Typography>           
               </div>
               <div className="flex gap-4">
               <Typography sx={{color:"grey.light"}}>© 2024 Brilliant Worldwide, Inc., Brilliant and the Brilliant Logo are trademarks of Brilliant Worldwide, Inc.</Typography>
               </div>
            </Box> 
      </div>
    </Box>
  )
}

export default Footer