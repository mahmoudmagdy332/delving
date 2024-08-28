import { Box } from "@mui/material"

import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../../app/config"
import { useSocialLogin } from "../../../app/utils/hooks/useAuth";
const getZeroAuthToken = async (jwtToken: string): Promise<string | null> => {
    try {
      const response = await fetch('https://oauth2.googleapis.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: jwtToken }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to convert token');
      }
  
      const data = await response.json();
      return data.zeroAuthToken || null;
    } catch (error) {
      console.error('Error converting token:', error);
      return null;
    }
  };
const GoogleLogin = () => {
    const { mutate, isSuccess, isPending, isError, error } =useSocialLogin();

      const signInWithGoogle = async (): Promise<void> => {
        // try {
        //   const result = await signInWithPopup(auth,provider);
        //   const token = await result.user?.getIdToken();
      
        //   if (token) {
        //     console.log('Zero Auth Token:', result.user);
        //     {mutate({ provider:'google',token:token})}
        //     // const zeroAuthToken = await getZeroAuthToken(token);
      
        //     // // Send the zero-auth token to your backend or wherever needed
        //     // console.log('Zero Auth Token:', zeroAuthToken);
        //   }
        // } catch (error) {
        //   console.error('Error during sign-in:', error);
        // }
        signInWithPopup(auth,provider).then((data)=>{
          console.log('Zero Auth Token:', data);
        })
      };
  return (
    <Box onClick={signInWithGoogle} sx={{borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark'}}  className='cursor-pointer transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2 w-full '>
    <img src='/images/ICONS/google.svg'/>Log in with Google
    </Box>
  )
}

export default GoogleLogin