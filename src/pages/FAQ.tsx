import { Box, Button, Typography } from "@mui/material"
import HeaderLayout from "../components/common/HeaderLayout"
import Quetions from "../components/common/Quetions"

const FAQ = () => {
    const listItems=['All',"STUDENTS","TEACHERS","LIFE-LONG LEARNERS","LIPROFESSIONALS","PARENTS"]

  return (
    <div className="py-10 w-10/12 mx-auto">
    <div className="flex flex-col gap-16">
    <div className="flex justify-center">
         <HeaderLayout>
         <Typography sx={{color:'text.primary',fontSize:"20px",fontWeight:"bold"}}>Frequently Asked <Box component="span" sx={{color:'yellow.main'}}>Questions</Box></Typography>
         </HeaderLayout>
     </div>
   
    
          <div className="flex justify-center">
          <div className="flex flex-wrap lg:justify-between  gap-4 xl:w-3/4 ">
             {listItems.map((item)=>(
               <Button sx={{border:"1px solid gray",color:'text.primary',py:'8px',px:'10px',borderRadius:'5px','&:hover':{borderColor:'primary.main',bgcolor:'primary.dark'}}}>
                 {item}
               </Button>
             ))}
           </div>
          </div>
        <Quetions/>
        
    </div>
 </div>
  )
}

export default FAQ