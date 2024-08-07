import { Box, Typography } from "@mui/material"
import NorthEastIcon from '@mui/icons-material/NorthEast';


type props={
  id:number,
  title:string,
  description:string,
}
const BenefitCard = ({id,title,description}:props) => {
  return (
    <div className="border p-4 flex flex-col gap-6 rounded-md">
        <div className="flex justify-end">
            <Typography sx={{color:'text.primary',fontWeight:'bold',fontSize:'40px'}}>0{id}</Typography>
        </div>
        <div className="flex flex-col gap-2">
            <Typography sx={{color:'text.primary',fontWeight:'500',fontSize:'20px'}}>{title}</Typography>        
            <Typography sx={{color:'text.primary',fontWeight:'400',fontSize:'16px'}}>{description}</Typography>
        </div>
        <div className="flex justify-end my-2">
          <Box sx={{color:'primary.main','&:hover':{color:'yellow.dark'}}} className="border p-2 cursor-pointer rounded ">
          <NorthEastIcon sx={{fontWeight:'bold',fontSize:'20px'}}/>
          </Box>
      
        </div>
        
    </div>
  )
}

export default BenefitCard