import {  Button, TextField } from "@mui/material"
import { Link } from "react-router-dom"

const LoginWith = () => {
  return (
    <div className="w-10/12 lg:w-9/12 mx-auto grid lg:grid-cols-2 items-center gap-y-5 gap-x-20 my-10">
       <img src="/images/PHOTOS/signup.svg"/>
       <div className="mt-10">
          <div className="flex flex-col gap-8 items-center">
          <h3 className="font-bold text-2xl">Log In</h3>
          <form className="w-full flex flex-col gap-4">
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
            <TextField className="col-span-2 w-full"
                placeholder="Password"
                type="password"
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
            <Button  sx={{backgroundColor:'gray.dark',color:'gray.light',borderRadius:'100px',borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark',py:'12px', mt:'30px',"&:hover":{color:'gray.dark'}}}  className='transition-all ease-in-out  font-semibold hover:shadow-lg flex   w-full '>
              Log in
          </Button>
            </form>

            <div className="flex gap-2">New user? <Link to="/signup">Sign up</Link></div>

          </div>
       </div>
    </div>
  )
}

export default LoginWith