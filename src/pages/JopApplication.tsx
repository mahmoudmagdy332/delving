import { Box, Button, RadioGroup, Typography } from "@mui/material"
import JopInput from "../components/jop/JopInput"
import JopRadioInput from "../components/jop/JopRadioInput"
import JopTextArea from "../components/jop/JopTextArea"
import JopCheckInput from "../components/jop/JopCheckInput"

export const JopApplication = () => {
  return (
    <div >
    <div className="w-10/12 lg:w-3/5 mx-auto gap-10 items-start grid grid-cols-1 md:grid-cols-3 py-10">
       <div className="flex flex-col gap-3 lg:col-span-2">
       <Typography sx={{fontFamily:'typography',fontSize:'36px',fontWeight:'500',color:'dark.main',lineHeight:"57.6px"}}>Senior Producer (Machine
         Learning & Artificial Intelligence)</Typography>
         <Typography sx={{fontSize:'16px',fontWeight:'400',color:'gray.dark'}}>Americas</Typography>

         <div className="">Content / Full-time / Remote</div>
       </div>
     

    </div>
    <Box sx={{bgcolor:'background.paper'}} >
     <div className="w-10/12 lg:w-3/5 mx-auto gap-10 items-start grid grid-cols-1 md:grid-cols-4 py-10">
       <div className="col-span-3">
          <div className="flex flex-col gap-12">
          <Typography sx={{fontFamily:'Typography',fontSize:'22px',fontWeight:'500'}}>Submit Your Application</Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-start gap-y-8 gap-x-4">
            <Typography sx={{fontSize:'18px',display:'flex',alignItems:'center'}}>Resume/CV <span className="ms-2 text-red-600">*</span></Typography>
          <div>
          <label
            htmlFor="avatar-upload"
            role="button"
            className="flex gap-6 p-4 col-span-2 max-w-64 items-start bg-gray-200 justify-center border rounded-sm border-gray-300"
          >
            <img src="/images/ICONS/ATTACH.svg"/>
            <Typography sx={{color:'black.main'}}>ATTACH RESUME/CV</Typography>
          </label>
          <input
            type="file"
            id="avatar-upload"
            className="hidden"
       
          />
          </div>
            <div>
         
         
        </div>
            <Typography sx={{fontSize:'18px',display:'flex',alignItems:'center'}}>Full name <span className="ms-2 text-red-600">*</span></Typography>
             <JopInput/>
             <Typography sx={{fontSize:'18px',display:'flex',alignItems:'center'}}>Pronouns </Typography>
             <JopInput/>
             <Typography sx={{fontSize:'18px',display:'flex',alignItems:'center'}}>Email <span className="ms-2 text-red-600">*</span></Typography>
             <JopInput/>
             <Typography sx={{fontSize:'18px',display:'flex',alignItems:'center'}}>Phone </Typography>
             <JopInput/>
             <Typography sx={{fontSize:'18px',display:'flex',alignItems:'center'}}>Current location </Typography>
             <JopInput/>
             <Typography sx={{fontSize:'18px',display:'flex',alignItems:'center'}}>Current company </Typography>
             <JopInput/>
          </div> 
          <Typography sx={{fontFamily:'Typography',fontSize:'22px',fontWeight:'500'}}>Links</Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-start gap-y-8">
           

            <Typography sx={{fontSize:'18px',display:'flex',alignItems:'center'}}>LinkedIn URL </Typography>
             <JopInput/>
             <Typography sx={{fontSize:'18px',display:'flex',alignItems:'center'}}>GitHub URL </Typography>
             <JopInput/>
             
             <Typography sx={{fontSize:'18px',display:'flex',alignItems:'center'}}>Portfolio URL </Typography>
             <JopInput/>
             <Typography sx={{fontSize:'18px',display:'flex',alignItems:'center'}}>Other website </Typography>
             <JopInput/>
          </div> 
          <Typography sx={{fontFamily:'Typography',fontSize:'22px',fontWeight:'500'}}>Why are you interested in Brilliant?</Typography>
          <div className="grid grid-cols-1  items-center justify-start gap-y-8">
           

            <Typography sx={{display:'flex',alignItems:'center'}}>Please leave a note that expresses your interest in the position/company. <span className="ms-2 text-red-600">*</span></Typography>
            <JopTextArea/>
          </div> 

          <Typography sx={{fontFamily:'Typography',fontSize:'22px',fontWeight:'500'}}>Teaching sample</Typography>
          <div className="grid grid-cols-1  items-center justify-start gap-y-8">
           

            <Typography sx={{display:'flex',alignItems:'center'}}>If you’re the right fit for this role, you probably have a blog, have designed some lessons, or have some
                amazing past projects; please share links to one or more artifacts you'd like to highlight, we’d love to check
                them out!</Typography>
            <JopInput/>
          </div> 

          <Typography sx={{fontFamily:'Typography',fontSize:'22px',fontWeight:'500'}}>Teaching experience (ML)</Typography>
          <div className="grid grid-cols-1  items-center justify-start gap-y-8">
           

            <Typography sx={{display:'flex',alignItems:'center'}}>Please summarize your teaching experience. We're particularly interested in hearing about your experiences
            teaching machine learning, AI, and data science topics! </Typography>
            <JopTextArea/>
          </div> 
          </div> 
          <div className="border-t border-gray-300 mt-10 pt-10 flex flex-col gap-4">
             <Typography sx={{fontFamily:'Typography',fontWeight:'500',fontSize:'20px'}}>Demographic Survey for Brilliant.org</Typography>
             <Typography>We invite you to complete this optional survey to help us evaluate our diversity and inclusion efforts.
                Submission of the information on this form is strictly voluntary and refusal to provide it will not subject you
                to any adverse treatment or affect your job application. Information obtained will be kept separate from your
                name or job application. This information will be kept secure and confidential and will be used solely to
                evaluate our diversity and inclusion efforts.</Typography>
            <Typography sx={{fontWeight:'400',fontSize:'16px'}}>What is your age range?</Typography>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <JopRadioInput value="1" label="17 or younger"/>
                <JopRadioInput value="2" label="18-20"/>
                <JopRadioInput value="3" label="30-39"/>
                <JopRadioInput value="4" label="40-49"/>
                <JopRadioInput value="5" label="50-59"/>
                <JopRadioInput value="6" label="60 or older"/>

            </RadioGroup>
          </div>

          <div className="border-t border-gray-300 mt-10 pt-10 flex flex-col gap-4">
             <Typography sx={{fontFamily:'Typography',fontWeight:'500',fontSize:'20px'}}>I identify my ethnicity as</Typography>
             <Typography>Select all that apply</Typography>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                className="flex flex-col gap-3"
            >
            <JopCheckInput value="1" label="White / Caucasian"/>
            <JopCheckInput value="2" label="Hispanic, Latino, or Spanish origin"/>
            <JopCheckInput value="3" label="Black or African American"/>
            <JopCheckInput value="4" label="Native Hawaiian or other Pacific Islander"/>
             

            </RadioGroup>
          </div>
          <div className="flex justify-center my-20">
             
                  <Button sx={{bgcolor:'primary.main',"&:hover":{bgcolor:'black.dark'},color:'background.default',fontWeight:'600',px:'30px',py:"15px",borderRadius:'5px'}} >Submit application </Button>
               

                </div>
       </div>
     </div>
   
    </Box>

</div>
  )
}
