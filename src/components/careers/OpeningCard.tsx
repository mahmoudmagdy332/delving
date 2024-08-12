import { Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const OpeningCard = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-2 gap-10 py-5 border-b">
    <div className="flex flex-col gap-4">
    <Typography sx={{fontFamily:'typography',fontSize:'24px',fontWeight:'400'}}>Design</Typography>
    <Typography sx={{fontSize:'18px',fontWeight:'400'}}>Brilliant Design is a diverse team with expertise in product design, brand design, and product illustration. Whether for learners, course writers, or educators — we investigate end user needs and iteratively craft experiences to meet them. We also build the style and component systems that help us all work together and stay consistent. We value UI craft, user research, levity, and experimentation.</Typography>
    <Link to="/jop/1" className="flex justify-start">
    <Button sx={{bgcolor:'primary.main',"&:hover":{bgcolor:'black.dark'},color:'background.default',fontWeight:'600',px:'30px',py:"15px",borderRadius:'5px'}} >Learn More</Button>

    </Link>
  </div>  
  <div className="flex flex-col gap-5">
  <div className="flex flex-col gap-1">
  <Typography sx={{fontFamily:'typography',fontSize:'24px',fontWeight:'500',color:'primary.main'}}>Senior Product Designer, User Motivation</Typography>
  <Typography sx={{fontSize:'16px',fontWeight:'400'}}>FULL-TIME - REMOTE</Typography>

  </div>
  <div className="flex flex-col gap-1">
  <Typography sx={{fontFamily:'typography',fontSize:'24px',fontWeight:'500',color:'primary.main'}}>Senior Product Designer, User Motivation</Typography>
  <Typography sx={{fontSize:'16px',fontWeight:'400'}}>FULL-TIME - REMOTE</Typography>

  </div>
  </div>
</div>  )
}

export default OpeningCard