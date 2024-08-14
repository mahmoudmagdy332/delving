import { Box, Button, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="w-10/12 lg:w-9/12 mx-auto grid lg:grid-cols-2 gap-y-5 gap-x-20 my-10">
       <img src="/images/PHOTOS/signup.svg"/>
       <div className="mt-10">
          <div className="flex flex-col gap-8 items-center">
            <div className="w-3/5">
            <Typography sx={{fontFamily:'Typography',lineHeight:'37.58px',fontSize:'32px',textAlign:'center'}}>Create a free account to discover your personalized learning path</Typography>
            </div>
            <div className="flex gap-5 w-full">
            <Box sx={{borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark'}}  className='cursor-pointer w-1/2 transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2  '>
          <img src='/images/ICONS/google.svg'/>
          </Box>
          <Box sx={{borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark'}}  className='cursor-pointer transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2 w-1/2 '>
          <img src='/images/ICONS/facebook.svg'/>
          </Box>
            </div>
            <div className="flex gap-2 items-center justify-center w-full my-5">
               <div className="w-3/5  bg-gray-500" style={{height:'1px'}}></div>
                or
               <div className="w-3/5 bg-gray-500" style={{height:'1px'}}></div>
            </div>
            <form className="w-full">
            <TextField className="col-span-2 w-full"
                placeholder="Email"
                sx={{ bgcolor:'gray.light',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'gray', // Default border color
                      },
                     
                      '&.Mui-focused fieldset': {
                        borderColor: 'black.dark', // Border color when focused
                      },
                      '& input': {
                        color: 'black', // Ensure text color is black
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'black', // Label color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'green', // Label color when focused
                    },
                  }} 
            id="outlined-basic"  />
            <div className="text-sm text-center mt-4">By clicking above, I agree to Brilliant's Terms and Privacy Policy</div>
            <Button  sx={{backgroundColor:'gray.dark',color:'gray.light',borderRadius:'100px',borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark',py:'12px', mt:'30px',"&:hover":{color:'gray.dark'}}}  className='transition-all ease-in-out  font-semibold hover:shadow-lg flex   w-full '>
              Sign Up
          </Button>
            </form>
            <div className="flex gap-2">Existing user? <Link to="/login">Log in</Link></div>
          </div>
       </div>
    </div>
  )
}

export default Signup