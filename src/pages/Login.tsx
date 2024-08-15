import { Box } from "@mui/material"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="w-10/12 lg:w-9/12 mx-auto grid lg:grid-cols-2 items-center gap-y-5 gap-x-20 my-10">
       <img src="/images/PHOTOS/signup.svg"/>
       <div className="mt-10">
          <div className="flex flex-col gap-8 items-center">
          <Box sx={{borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark'}}  className='cursor-pointer transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2 w-full '>
          <img src='/images/ICONS/google.svg'/>Log in with Google
          </Box>
          <Box sx={{borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark'}}  className='cursor-pointer transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2 w-full '>
          <img src='/images/ICONS/facebook.svg'/>Log in with Facebook
          </Box>
          <Link to="/Login-with-email" className="w-full">
          <Box sx={{backgroundColor:'gray.dark',color:'gray.light',borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark'}}  className='cursor-pointer  transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2 w-full '>
           Log in with Email
          </Box>
          </Link>
          

            <div className="flex gap-2">New user? <Link to="/signup">Sign up</Link></div>

          </div>
       </div>
    </div>
  )
}

export default Login