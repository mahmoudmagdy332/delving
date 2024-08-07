import { Box, Typography } from "@mui/material"
import HeaderLayout from "../common/HeaderLayout"

const Hero = () => {
  return (
    <div className="w-10/12 lg:w-3/4 mx-auto my-20 ">
         <div className="flex flex-col gap-5 items-center">
         <HeaderLayout>
            <Typography sx={{fontSize:'28px',px:'10px',fontFamily:"Cairo",fontWeight:'bold'}}>About <Box component="span" sx={{color:'yellow.main'}}>Us</Box></Typography>
         </HeaderLayout>
         <Typography sx={{textAlign:'center',fontSize:'18px'}}>We help people learn quantitative and technical skills, especially in math, data, and computer science / AI. On Brilliant, you’re learning by doing – there are no videos, and everything is interactive. Our courses are a delightful experience of guided discovery, designed to improve your ability to think and reason from first principles.</Typography>
         <img src="/PHOTOS/Frame 2608236.png"/>
         </div>
    </div>
  )
}

export default Hero