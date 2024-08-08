import { Typography } from "@mui/material"
import SchoolIcon from '@mui/icons-material/School';
const ExploreCource = () => {
  return (
    <div className="flex p-8 flex-col gap-4 border-2 rounded-xl mt-10 sticky top-40 left-0">
         <img src="/images/PHOTOS/Layer_x0020_1.svg" className="w-16 h-16"/>
         <Typography sx={{color:'primary.main',fontWeight:'700'}}>Light Current · Level 1</Typography>
         <Typography sx={{color:'dark.main',fontWeight:'700',fontSize:'36px'}}>Solving Equations</Typography>
         <Typography sx={{color:'text.secondary',fontWeight:'400',fontSize:'16px',lineHeight:'24px'}}>  Start your algebra journey here with an introduction to
         variables and equations.</Typography>
         
         <Typography sx={{color:'dark.dark',fontWeight:'400',fontSize:'16px',display:'flex',gap:'10px'}}>
            <SchoolIcon/>
            27 Lessons</Typography>

         
    </div>
  )
}

export default ExploreCource