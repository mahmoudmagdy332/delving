import { Box, Typography } from "@mui/material"
import HeaderLayout from "../common/HeaderLayout"

const Hero = () => {
  return (
    <div className="w-10/12 lg:w-3/4 mx-auto my-20 ">
    <div className="flex flex-col gap-5 items-center">
    <HeaderLayout>
       <Typography sx={{fontSize:'28px',px:'10px',fontFamily:"Cairo",fontWeight:'bold'}}>Delveng <Box component="span" sx={{color:'yellow.main'}}>Careers</Box></Typography>
    </HeaderLayout>
    <Typography sx={{textAlign:'center',fontSize:'20px'}} className="lg:w-3/4">We're committed to our mission of creating a world of problem solvers, proud of the business we've built, and even more excited about the future. We're glad you're here to see if Delveng might be right for you! </Typography>
    </div>
</div>
  )
}

export default Hero