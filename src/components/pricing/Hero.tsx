import { Box, Typography } from "@mui/material"
import HeaderLayout from "../common/HeaderLayout"

const Hero = () => {
  return (
    <div className="w-10/12 lg:w-3/4 mx-auto my-20 ">
    <div className="flex flex-col gap-5 items-center">
    <HeaderLayout>
       <Typography sx={{fontSize:'28px',px:'10px',fontFamily:"Cairo",fontWeight:'bold'}}>Our <Box component="span" sx={{color:'yellow.main'}}>Pricing</Box></Typography>
    </HeaderLayout>
    <Typography sx={{textAlign:'center',fontSize:'20px'}} className="lg:w-3/4">Welcome to Delveng's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. </Typography>
    </div>
</div>
  )
}

export default Hero