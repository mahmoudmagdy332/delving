import { Box, Button, Typography } from "@mui/material"
import HeaderLayout from "../components/common/HeaderLayout"
import CardTestimonial from "../components/testimonials/CardTestimonial"

const Testimonials = () => {
  const listItems=['All',"STUDENTS","TEACHERS","LIFE-LONG LEARNERS","LIPROFESSIONALS","PARENTS"]

  return (
    <div className="py-10 w-10/12 mx-auto">
    <div className="flex flex-col gap-10">
    <div className="flex justify-center">
         <HeaderLayout>
         <Typography sx={{color:'text.primary',fontSize:"20px",fontWeight:"bold"}}>Our <Box component="span" sx={{color:'yellow.main'}}>Testimonials</Box></Typography>
         </HeaderLayout>
     </div>
     <div className="flex justify-center ">
     <Typography className="xl:w-3/4" sx={{lineHeight:"36px",color:'text.primary',textAlign:'center',fontSize:"16px",fontWeight:"400"}}>
     Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
     </Typography>
       
     </div>
     <div className="flex justify-center mb-10">
     <img src="/images/PHOTOS/shutterstock_663157873 [Converted] 1.png"/>

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

           <div className="grid  grid-cols-1 md:grid-cols-2  gap-8">
              
              <CardTestimonial/>
              <CardTestimonial/>
              <CardTestimonial/>
           </div>
    </div>
 </div>
  )
}

export default Testimonials