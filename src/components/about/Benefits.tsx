import { Typography } from "@mui/material"
import BenefitCard from "./BenefitCard"

const Benefits = () => {
  const Benefits=[
    {title:'Flexible Learning Schedule',description:'Fit your coursework around your existing commitments and obligations.'}
    ,{title:'Flexible Learning Schedule',description:'Fit your coursework around your existing commitments and obligations.'}
    ,{title:'Flexible Learning Schedule',description:'Fit your coursework around your existing commitments and obligations.'}
  ]
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto my-10 ">
         <div className="border-t">
            <Typography sx={{fontSize:'20px',fontWeight:'600',margin:'40px 0px'}}>Benefits</Typography>
             <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
               {Benefits.map((Benefit,idx)=>(
                <BenefitCard {...Benefit} id={idx+1}/>
               ))}               
             </div>       
          </div>
    </div>
  )
}

export default Benefits