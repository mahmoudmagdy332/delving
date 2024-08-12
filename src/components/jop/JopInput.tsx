import { TextField } from "@mui/material"

const JopInput = () => {
  return (
    <TextField className="col-span-2"
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
  )
}

export default JopInput