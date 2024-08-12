import { Box, Button, Typography } from "@mui/material"

import CheckIcon from '@mui/icons-material/Check';
const PlaneCard = () => {
  return (
    <div className="border rounded-xl px-3 py-8 flex flex-col gap-5 ">
               <Box sx={{bgcolor:'primary.light',color:'background.default',fontSize:'18px'}} className="flex font-semibold rounded-lg py-3 justify-center">
                  Free Plan
              </Box> 
              <div className="flex justify-center items-end">
                  <Typography sx={{fontSize:'60px',fontWeight:'600',color:'black.dark'}}>$0</Typography>
                  <Typography sx={{fontSize:'16px',fontWeight:'500',color:'gray.dark',opacity:'.6'}}>/month</Typography>
              </div>
              <Box sx={{bgcolor:'background.default',borderRadius:'20px'}} className="flex flex-col gap-4  border" >
                <div className="p-5 flex flex-col gap-10 items-center justify-center">
                <Typography sx={{fontSize:'20px',fontWeight:'600',color:'black.dark'}}>Available Features</Typography>
                  <div className="flex flex-col gap-4 w-full ">
                  <div className="border rounded-lg gap-3 flex items-center p-3">
                   <Box sx={{width:'30px',height:'30px', borderRadius:'5px', display:'flex',justifyContent:'center',alignItems:'center',bgcolor:'primary.dark'}}>
                   <CheckIcon/>
                   </Box>
                  <Typography sx={{fontSize:'18px',fontWeight:'400',color:'black.dark'}}>Access to selected free courses.</Typography>
                  </div>  
                  <div className="border rounded-lg gap-3 flex items-center p-3">
                   <Box sx={{width:'30px',height:'30px', borderRadius:'5px', display:'flex',justifyContent:'center',alignItems:'center',bgcolor:'primary.dark'}}>
                   <CheckIcon/>
                   </Box>
                  <Typography sx={{fontSize:'18px',fontWeight:'400',color:'black.dark'}}>Access to selected free courses.</Typography>
                  </div> 
                  </div>
                </div>
                <Button sx={{bgcolor:'primary.light' ,"&:hover":{bgcolor:'black.dark'},color:'background.default',px:'30px',py:"15px",borderRadius:'0 0 20px 20px '}} >Get Started</Button>

              </Box>
          </div>
  )
}

export default PlaneCard