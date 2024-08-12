import { Box, Button, Typography } from "@mui/material"
import RateStar from "../common/RateStar"

const CardTestimonial = () => {
  return (
    <Box className="flex flex-col gap-4 rounded-md border">
    <div className="p-8 ">
    The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!
    </div>
    <Box sx={{bgcolor:'gray.light'}} className="flex flex-col rounded-es-lg rounded-ee-lg ">
    <div className="p-8 flex items-center justify-between">
      <div className="flex flex-col gap-3">
         <Typography sx={{fontWeight:'600'}}>Salma Abbas</Typography>
         <RateStar starNumber={4}/>
      </div>
      <Button sx={{border:"1px solid gray",color:'text.primary',py:'8px',px:'10px',borderRadius:'5px','&:hover':{borderColor:'primary.main',bgcolor:'primary.dark'}}}>
                students
    </Button>
    </div>
    </Box>
</Box>
  )
}

export default CardTestimonial