import { Box, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const [step,setStep]=useState(0);
  const [answerSelected,setAnswerSelected]=useState<null|number>(null);
  const quesions=[
    {title:"What’s your top goal?",
    chooses:[
      {icon:'/images/ICONS/choose1.png',name:'Mechanical Engineering'},
      {icon:'/images/ICONS/choose2.png',name:'Electrical Engineering'},
      {icon:'/images/ICONS/choose3.png',name:'Architecture'},
      {icon:'/images/ICONS/choose4.png',name:'Civil Engineering'},
      {icon:'/images/ICONS/choose5.png',name:'Infrastructure'}
    ]
    },
    {title:"What do you want to focus on?",
      chooses:[
        {icon:'/images/ICONS/choose1.png',name:'HVAC'},
        {icon:'/images/ICONS/choose2.png',name:'Plumbing'},
        {icon:'/images/ICONS/choose3.png',name:'Fire Fighting'},
        {icon:'/images/ICONS/choose4.png',name:'Electrical Design'},
        {icon:'/images/ICONS/choose5.png',name:'Low current Design'},
        {icon:'/images/ICONS/choose5.png',name:'BMS Design'},
      ]
      },
      {title:"What’s your top goal?",
        chooses:[
          {icon:'/images/ICONS/choose1.png',name:'Mechanical Engineering'},
          {icon:'/images/ICONS/choose2.png',name:'Electrical Engineering'},
          {icon:'/images/ICONS/choose3.png',name:'Architecture'},
          {icon:'/images/ICONS/choose4.png',name:'Civil Engineering'},
          {icon:'/images/ICONS/choose5.png',name:'Infrastructure'}
        ]
        },
        {title:"What do you want to focus on?",
          chooses:[
            {icon:'/images/ICONS/choose1.png',name:'HVAC'},
            {icon:'/images/ICONS/choose2.png',name:'Plumbing'},
            {icon:'/images/ICONS/choose3.png',name:'Fire Fighting'},
            {icon:'/images/ICONS/choose4.png',name:'Electrical Design'},
            {icon:'/images/ICONS/choose5.png',name:'Low current Design'},
            {icon:'/images/ICONS/choose5.png',name:'BMS Design'},
          ]
          },
]
const [answers,setAnswers]=useState<null[]|number[]>([])
useEffect(()=>{
  const emptyNullArray = Array.from({ length: quesions.length }, () => null);
  setAnswers(emptyNullArray)
},[])
const HandleContinue=()=>{
  const array=answers;
  array[step]=answerSelected;
  setAnswers(array)
  if(step+1<quesions.length){
    setStep(step+1)
  }
  else{
    console.log('Answers',answers)
    navigate("/signup");
  }

  setAnswerSelected(null)
}
  return (
    <div className="my-20 w-10/12 lg:w-3/4 xl:w-1/2 mx-auto flex flex-col gap-2 items-center">
        <img src="/images/LOGO/Logo (2) 1.png" className="mb-20"/>
        <div className="flex items-center">
          {quesions.map((_,idx)=>(
           <>
              <Box sx={{ bgcolor:idx<=step?'primary.main':'gray.main',color:idx<=step?'white':'gray.light'}}  className=" h-8 w-8 text-sm md:h-12 md:w-12 md:text-md lg:h-16 lg:w-16 lg:text-lg  font-semibold  rounded-full flex justify-center items-center">{idx+1}</Box>
              
              {idx+1<quesions.length&&(
                <>
                 {idx<step?(
              <Box sx={{height:'1px',bgcolor:'primary.main'}} className="w-8 md:w-16 lg:w-20 "></Box>
              ):idx==step?(
                <>
                <Box sx={{height:'1px',bgcolor:'primary.main'}} className=" w-4 md:w-8 lg:w-10 "></Box>
                <Box sx={{height:'1px',bgcolor:'gray.main'}} className="  w-4 md:w-8 lg:w-10"></Box>
                </>
              ):(
                <Box sx={{height:'1px',bgcolor:'gray.main'}} className=" w-8 md:w-16 lg:w-20 "></Box>
              )}
                </>
              )}
             
           </>
          ))}
           {/* <Box  sx={{bgcolor:'primary.main'}} className=" h-16 w-16 text-white font-semibold text-lg rounded-full flex justify-center items-center">1</Box>
           <Box sx={{height:'1px',bgcolor:'primary.main'}} className=" w-20 "></Box>
           <Box sx={{bgcolor:'primary.main'}}  className="bg-blue-500 h-16 w-16 text-white font-semibold text-lg rounded-full flex justify-center items-center">2</Box> */}
           
           {/* <Box  className=" h-16 w-16 border font-semibold text-lg rounded-full flex justify-center items-center">3</Box>
           <Box sx={{height:'1px',bgcolor:'gray.main'}} className=" w-20 "></Box>
           <Box  className=" h-16 w-16 border font-semibold text-lg rounded-full flex justify-center items-center">4</Box> */}

         </div>
         <div className="my-10 text-xl font-semibold">{quesions[step].title}</div>
         <div className="flex flex-col gap-4 justify-center items-center w-full">
          {quesions[step].chooses.map((choose,idx)=>(
            <Box onClick={()=>setAnswerSelected(idx)} sx={{borderColor:answerSelected===idx?'primary.main':'gray.main',bgcolor:answerSelected===idx?'primary.dark':""}}className="border w-full cursor-pointer rounded-lg  py-4 px-4 flex gap-4 items-center transition-all easy-in-out">
            <img src={choose.icon}/>
            <Typography sx={{fontWeight:'500',fontSize:'20px'}}>{choose.name}</Typography>
          </Box>
          ))}
          
           
            <Button onClick={HandleContinue} sx={{bgcolor:'primary.main',fontSize:'16px',"&:hover":{bgcolor:'black.dark',color:'black.light'},
            color:'white',fontWeight:'600',
            px:'30px',py:"15px",borderBottom:'3px solid black',borderColor:'black.dark',borderRadius:'40px',mt:"20px",width:'300px'}} className="shadow-lg" >
              Continue
               </Button>

         </div>
    </div>
  )
}

export default Welcome