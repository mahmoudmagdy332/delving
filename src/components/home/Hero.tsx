import { Button, Typography } from "@mui/material"
import HeaderLayout from "../common/HeaderLayout"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate=useNavigate();
  const HandleDelve=()=>{
    navigate('/intro')
  }
  return (
    <div className="w-11/12 md:w-3/4 mx-auto flex flex-col-reverse items-center my-20 gap-32 lg:flex-row">
        <div className="lg:w-1/2 flex flex-col gap-8 items-center lg:items-start">
        
        <HeaderLayout>
        <Typography sx={{color:"dark.main",fontSize:'24px',fontWeight:"bold"}}>
            Delve into Engineering
            with <span style={{color:"#ffce00"}}>Delveng</span>
        </Typography>
        </HeaderLayout>
        <Typography sx={{color:"gray.dark"}}>Where Engineering Meets Gamified Learning</Typography>
        <Button onClick={HandleDelve} sx={{bgcolor:'primary.light',color:'background.default',p:"10px",
                '&:hover': {
              backgroundColor:'yellow.dark',        
           },
              }}>Delve Now</Button>
        </div>
        <div className="lg:w-1/2">
             <img src="/images/PHOTOS/Visiting construction site.png" className="w-full"/>  
        </div>
    </div>
  )
}

export default Hero