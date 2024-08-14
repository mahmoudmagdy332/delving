import { Box, Button, Typography } from "@mui/material"

const Welcome = () => {
  return (
    <div className="my-20 w-10/12 lg:w-3/4 xl:w-1/2 mx-auto flex flex-col gap-2 items-center">
        <img src="/images/LOGO/Logo (2) 1.png" className="mb-20"/>
        <div className="flex items-center">
           <Box  sx={{bgcolor:'primary.main'}} className=" h-16 w-16 text-white font-semibold text-lg rounded-full flex justify-center items-center">1</Box>
           <Box sx={{height:'1px',bgcolor:'primary.main'}} className=" w-20 "></Box>
           <Box sx={{bgcolor:'primary.main'}}  className="bg-blue-500 h-16 w-16 text-white font-semibold text-lg rounded-full flex justify-center items-center">2</Box>
           <Box sx={{height:'1px',bgcolor:'primary.main'}} className=" w-10"></Box>
           <Box sx={{height:'1px',bgcolor:'gray.main'}} className=" w-10 "></Box>
           <Box  className=" h-16 w-16 border font-semibold text-lg rounded-full flex justify-center items-center">3</Box>
           <Box sx={{height:'1px',bgcolor:'gray.main'}} className=" w-20 "></Box>
           <Box  className=" h-16 w-16 border font-semibold text-lg rounded-full flex justify-center items-center">4</Box>

         </div>
         <div className="my-10 text-xl font-semibold">What’s your top goal?</div>
         <div className="flex flex-col gap-4 justify-center items-center w-full">
            <Box sx={{borderColor:'gray.dark',}}className="border w-full rounded-lg  py-4 px-4 flex gap-4 items-center">
                <img src="/images/ICONS/image 24.png"/>
                <Typography sx={{fontWeight:'500',fontSize:'20px'}}>Calculus in a Nutshell</Typography>
            </Box>
            <Box sx={{borderColor:'gray.dark',}}className="border w-full rounded-lg  py-4 px-4 flex gap-4 items-center">
                <img src="/images/ICONS/image 24.png"/>
                <Typography sx={{fontWeight:'500',fontSize:'20px'}}>Calculus in a Nutshell</Typography>
            </Box>
            <Box sx={{borderColor:'gray.dark'}}className="border w-full rounded-lg  py-4 px-4 flex gap-4 items-center">
                <img src="/images/ICONS/image 24.png"/>
                <Typography sx={{fontWeight:'500',fontSize:'20px'}}>Calculus in a Nutshell</Typography>
            </Box>
            <Box sx={{borderColor:'gray.dark',}}className="border w-full rounded-lg  py-4 px-4 flex gap-4 items-center">
                <img src="/images/ICONS/image 24.png"/>
                <Typography sx={{fontWeight:'500',fontSize:'20px'}}>Calculus in a Nutshell</Typography>
            </Box>
            <Button sx={{bgcolor:'primary.main',fontSize:'16px',"&:hover":{bgcolor:'black.dark',color:'black.light'},
            color:'white',fontWeight:'600',
            px:'30px',py:"15px",borderBottom:'3px solid black',borderColor:'black.dark',borderRadius:'40px',mt:"20px",width:'300px'}} className="shadow-lg" >
              Continue
               </Button>

         </div>
    </div>
  )
}

export default Welcome