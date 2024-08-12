import { Button, Typography } from "@mui/material"
import OpeningCard from "./OpeningCard"

const Openings = () => {
    const listItems=['All',"HVAC","Light Current","Fire Fighting","Electrical Power","Construction",]

  return (
    <div className="my-10 w-11/12 lg:w-10/12 mx-auto">
         <Typography sx={{fontFamily:'typography',fontSize:'32px',fontWeight:'500'}}>Career Openings</Typography>
   
         <div className="flex flex-wrap gap-4 my-10">
                {listItems.map((item)=>(
                  <Button sx={{border:"1px solid gray",color:'text.primary',py:'8px',px:'10px',borderRadius:'5px','&:hover':{borderColor:'primary.main',bgcolor:'primary.dark'}}}>
                    {item}
                  </Button>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                 <OpeningCard/>
                 <OpeningCard/>
              </div>
    </div>
  )
}

export default Openings