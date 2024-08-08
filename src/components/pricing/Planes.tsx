import { Box, Button } from "@mui/material"
import PlaneCard from "./PlaneCard"


const Planes = () => {
 
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col my-10 gap-20">
      <div className="flex justify-center">
          <Box sx={{bgcolor:'background.paper'}} className="p-2 flex rounded-xl">
             <Button sx={{bgcolor:'primary.main',"&:hover":{bgcolor:'black.dark'},color:'background.default',fontWeight:'600',px:'30px',py:"15px",borderRadius:'10px'}} >Monthly</Button>
             <Button sx={{color:'black.dark',px:'30px',py:"15px"}} >Yearly</Button>
          </Box>
      </div>
      <Box sx={{bgcolor:'background.paper'}} className="p-10 rounded-xl grid lg:grid-cols-2 gap-4">
          <PlaneCard/>
          <PlaneCard/>
      </Box>
    </div>
  )
}

export default Planes