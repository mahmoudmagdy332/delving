import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useSignUp } from "../app/utils/hooks/useAuth";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
const inputStyle={ bgcolor:'gray.light',
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
}
interface IFormInput {
  fname: string;
  lname: string;
  email: string;
  password: string;
  password_confirmation: string;
  gender:string
}
const Signup = () => {
  const [eyes, setEyes] = useState(false);
  const { mutate, isPending, isError, ErrorCheck, error } =useSignUp();
  const {
    register,
    watch,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutate(data);
  };
  const password = watch("password");

  return (
    <div className="w-10/12 lg:w-9/12 mx-auto grid lg:grid-cols-2 gap-y-5 items-center gap-x-20 my-10">
       <img src="/images/PHOTOS/signup.svg"/>
       <div className="mt-10">
          <div className="flex flex-col gap-4 items-center">
            <div className="w-4/5">
            <Typography sx={{lineHeight:'37.58px',fontWeight:'bold',fontSize:'18px',textAlign:'center'}}>Create a free account to discover your personalized learning path</Typography>
            </div>
            <div className="flex gap-5 w-full">
            <Box sx={{borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark'}}  className='cursor-pointer w-1/2 transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2  '>
          <img src='/images/ICONS/google.svg'/>
          </Box>
          <Box sx={{borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark'}}  className='cursor-pointer transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2 w-1/2 '>
          <img src='/images/ICONS/facebook.svg'/>
          </Box>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
               <div className="w-3/5  bg-gray-500" style={{height:'1px'}}></div>
                or
               <div className="w-3/5 bg-gray-500" style={{height:'1px'}}></div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-3">
            <div className="w-full">
            <TextField 
                 {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="col-span-2 w-full"
                placeholder="Email"
                sx={inputStyle} 
            id="outlined-basic"  />
                  {errors.email && (
                    <p role="alert" className="text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
            </div>



            <div className="flex relative">
              <div className="w-1/2">
              <TextField className="col-span-2 w-full"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                type={eyes ? "text" : "password"}
                sx={{...inputStyle,'& fieldset': {
                      borderColor: 'gray', // Default border color
                      borderRadius:'5px 0 0 5px'
                     }}} />
                {errors.password && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
              </div>
                <div className="w-1/2">
                <TextField className="col-span-2 w-full"
                placeholder="Repeat Password"
                {...register("password_confirmation", {
                  required: "Password confirmation is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}                
                type={eyes ? "text" : "password"}
                sx={{...inputStyle,'& fieldset': {
                  borderColor: 'gray', // Default border color
                  borderRadius:'0 5px 5px 0'
                }}} 
            id="outlined-basic"  />
                {errors.password_confirmation && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.password_confirmation.message}
                </p>
              )}
                </div>
              
                <div className="absolute top-3 end-1">
                  {eyes ? (
                    <div
                      onClick={() => setEyes(false)}
                      className="cursor-pointer text-xl text-primary"
                    >
                      <VisibilityIcon/>
                    </div>
                  ) : (
                    <div
                      onClick={() => setEyes(true)}
                      className="cursor-pointer text-xl text-primary"
                    >
                      <VisibilityOffIcon/>
                    </div>
                  )}
                </div>
            </div>
            <div className="flex">
              <div className="w-1/2">
              <TextField className="col-span-2 w-full"
                placeholder="First name"
                {...register("fname", {
                  required: "first name is required",
                  maxLength: {
                    value: 20,
                    message: "first name cannot exceed 20 characters",
                  },
                })}
                sx={{...inputStyle,'& fieldset': {
                  borderColor: 'gray', // Default border color
                  borderRadius:'5px 0 0 5px'
                }}} 
                id="outlined-basic"/>
           
              {errors.fname && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.fname.message}
                </p>
              )}
              </div>
             <div className="w-1/2">
             <TextField className="col-span-2 w-full"
                placeholder="Last name"
                {...register("lname", {
                  required: "last name is required",
                  maxLength: {
                    value: 20,
                    message: "last name cannot exceed 20 characters",
                  },
                })}
                sx={{...inputStyle,'& fieldset': {
                  borderColor: 'gray', // Default border color
                  borderRadius:'0 5px 5px 0'
                }}}  />
                {errors.lname && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.lname.message}
                </p>
              )}
             </div>
           
            </div>
           
            <FormControl 
             
            error={!!errors.gender} // Highlight in case of error
            fullWidth
              sx={{...inputStyle,
                "& label": {
                  color: 'gray.main',
                },
                "& label.Mui-focused": {
                  color: 'black',
                },             
              }}>
              <InputLabel >Gender</InputLabel>
              <Controller
                  name="gender"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Gender is required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Gender"
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  )}
                />
           </FormControl>
           {errors.gender && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.gender.message}
                </p>
              )}
            <div className="text-sm text-center mt-2">By clicking above, I agree to Delve's Terms and Privacy Policy</div>
           
          {isError ? (
              <p className="text-red-500">
                {ErrorCheck && 'User already exist' }
              </p>
            ) : (
              <p className="text-red-500">{error?.message}</p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="flex justify-center bg-primary text-white hover:bg-Secondary transition-all duration-400 items-center gap-3 rounded-sm py-3"
            >
              {isPending ? (
                <Button  sx={{backgroundColor:'gray.dark',color:'gray.light',borderRadius:'100px',borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark',py:'12px', mt:'10px',"&:hover":{color:'gray.dark'}}}  className='transition-all ease-in-out  font-semibold hover:shadow-lg flex   w-full '>
                  Loading
               </Button>
              ) : (
              <Button  sx={{backgroundColor:'gray.dark',color:'gray.light',borderRadius:'100px',borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark',py:'12px', mt:'10px',"&:hover":{color:'gray.dark'}}}  className='transition-all ease-in-out  font-semibold hover:shadow-lg flex   w-full '>
                  Sign Up
              </Button>
              )}
            </button>
            </form>
            <div className="flex gap-2">Existing user? <Link to="/login">Log in</Link></div>
          </div>
       </div>
    </div>
  )
}

export default Signup