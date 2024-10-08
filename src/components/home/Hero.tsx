import { Button, Typography } from "@mui/material"
import HeaderLayout from "../common/HeaderLayout"
import { useNavigate } from "react-router-dom"
import { useSettingSliceSelector } from "../../app/slices/settingSlice";

const Hero = () => {
  const { setting } = useSettingSliceSelector((state) => state.settingReducer);
  console.log('setting',setting);
  
  const navigate=useNavigate();
  const HandleDelve=()=>{
    navigate('/intro')
  }
  return (
    <div className="w-11/12 md:w-3/4 mx-auto flex flex-col-reverse items-center my-20 gap-32 lg:flex-row">
        <div className="lg:w-1/2 flex flex-col gap-8 items-center lg:items-start">
        
        <HeaderLayout>
        <Typography sx={{color:"dark.main",fontSize:'24px',fontWeight:"bold"}}>
            {setting?.title_intro}
            with <span style={{color:"#ffce00"}}>Delveng</span>
        </Typography>
        </HeaderLayout>
        <Typography sx={{color:"gray.dark"}}>{setting?.description_intro}</Typography>
        <Button onClick={HandleDelve} sx={{bgcolor:'primary.light',color:'background.default',p:"10px",
                '&:hover': {
              backgroundColor:'yellow.dark',        
           },
              }}>Delve Now</Button>
        </div>
        <div className="lg:w-1/2">
             <img src={setting?.image_intro} alt={setting?.title_intro} className="w-full"/>  
        </div>
    </div>
  )
}

export default Hero