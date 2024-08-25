import { Box, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import {  surveyQuery } from "../app/services/queries";
import { answerType, quesions } from "../app/type";
import { useSurveyMutation } from "../app/services/mutation";
import { useUserSelector } from "../app/slices/UserSlice";


const Welcome = () => {
  const navigate = useNavigate();
  const [step,setStep]=useState(0);
  const {data}= surveyQuery()
  const { mutate, isSuccess, isPending } =useSurveyMutation();
  const [quesions,setQuesions]=useState<quesions[]>([]);
  const { user } = useUserSelector((state) => state.UserReducer);
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  console.log('data',data?.data.data)
 useEffect(()=>{
  setQuesions(data?.data.data)
 },[data])
  const [answerSelected,setAnswerSelected]=useState<answerType>({  survey_id :null,
    answer_id :null});
 
const [answers,setAnswers]=useState<answerType[]>([])

const HandleContinue=()=>{
  const array=answers;
  array[step]=answerSelected;
  setAnswers(array)
  if(step+1<quesions.length){
    setStep(step+1)
  }
  else{
    console.log('Answers',answers)
    mutate({answers:answers})
    
  }

  setAnswerSelected({answer_id:null,survey_id:null})
}
useEffect(()=>{
  if(isSuccess){
    navigate(from);
  }
},[isSuccess])
useEffect(()=>{
  if(user?.survey_submited){
    navigate("/");
  }
},[user])
  return (
    <div className="my-10 w-10/12 lg:w-3/4 xl:w-1/2 mx-auto flex flex-col gap-2 items-center">
        <img src="/images/LOGO/Logo (2) 1.png" className="mb-10 h-10"/>
        <div className="flex items-center">
          {quesions?.length>0&&quesions.map((_,idx)=>(
           <>
              <Box sx={{ bgcolor:idx<=step?'primary.main':'gray.main',color:idx<=step?'white':'gray.light'}}  className=" h-8 w-8 text-sm md:h-10 md:w-10 md:text-md  lg:text-lg  font-semibold  rounded-full flex justify-center items-center">{idx+1}</Box>
              
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

         </div>
         {quesions?.length>0&&(
          <>
          <div className="my-5 text-xl font-semibold">{quesions[step].title}</div>
         <div className="flex flex-col gap-4 justify-center items-center w-full">
          {quesions[step].answers.map((choose)=>(
            <Box onClick={()=>setAnswerSelected({  survey_id :quesions[step].id,
              answer_id :choose.id})} sx={{borderColor:answerSelected.answer_id===choose.id?'primary.main':'gray.main',bgcolor:answerSelected.answer_id===choose.id?'primary.dark':""}}className="border w-full cursor-pointer rounded-lg  py-2 px-4 flex gap-4 items-center transition-all easy-in-out">
            <img src={choose.image} className="w-8"/>
            <Typography sx={{fontWeight:'500',fontSize:'16px'}}>{choose.title}</Typography>
          </Box>
          ))}
          
           
            

         </div>
         <div className="flex justify-center w-full">
          {isPending?(
          <Button  sx={{bgcolor:'primary.main',fontSize:'14px',"&:hover":{bgcolor:'black.dark',color:'black.light'},
          color:'white',fontWeight:'600',
          px:'30px',py:"10px",borderRadius:'10px',mt:"10px",width:'400px'}}  >
            Loading ...
          </Button>
          ):(
            <Button onClick={HandleContinue} sx={{bgcolor:'primary.main',fontSize:'14px',"&:hover":{bgcolor:'black.dark',color:'black.light'},
            color:'white',fontWeight:'600',
            px:'30px',py:"10px",borderRadius:'10px',mt:"10px",width:'400px'}}  >
              {step+1<=quesions.length?"Submit":"Continue"}
              
            </Button>
          )}
        
         </div>
         
          </>
         )}
         
    </div>
  )
}

export default Welcome