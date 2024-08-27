import CourseDiscrption from "../components/CoursePath/CourseDiscrption"
import ExploreCource from "../components/CoursePath/ExploreCource"
import Path from "../components/CoursePath/Path"
import { useNavigate, useParams } from "react-router-dom";
import { useCourseById } from "../app/utils/hooks/useCourse";
import { useEffect } from "react";
import { useUserSelector } from "../app/slices/UserSlice";
import Loader from "../components/common/Loader";

  
const CoursePath = () => {
  const { CourseId } = useParams();
  const navigator = useNavigate();
   const { user } = useUserSelector((state) => state.UserReducer);
    
    const {isError,isLoading,error} = useCourseById({id:CourseId});   
 
    useEffect(()=>{
      if(user){
        if(!user.survey_submited){
          navigator('/welcome',{ state:`courses/${CourseId}` })
        }
      }
     },[user])
     if (isLoading)
      return (
        <div className="flex h-screen justify-center items-center">
          <Loader />
        </div>
      );
    if (isError)
      return (
        <div className="h-screen flex justify-center items-center">
          Error: {error?.message}
        </div>
      );
  return (
   <div>
     <div className="w-11/12 lg:w-3/4 mx-auto gap-10 flex flex-col lg:flex-row">
         <div className="w-full lg:w-2/5 relative">
           <ExploreCource/> 
         </div>
         <div className="lg:w-3/5 ">
         <Path/>
        <div>
      
      <br />
      
   
    </div>

        
         </div>
        
    </div>
    <div className="w-11/12 lg:w-3/4 mx-auto gap-10 flex flex-col lg:flex-row">
         <div className="w-full lg:w-2/5 relative">
        
         </div>
         <div className="lg:w-3/5 ">
         <CourseDiscrption/>
         </div>
         </div>
   </div>
  )
}

export default CoursePath