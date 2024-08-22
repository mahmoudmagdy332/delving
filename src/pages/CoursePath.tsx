import CourseDiscrption from "../components/CoursePath/CourseDiscrption"
import ExploreCource from "../components/CoursePath/ExploreCource"
import Path from "../components/CoursePath/Path"
import { useParams } from "react-router-dom";
import { useCourseById } from "../app/utils/hooks/useCourse";
import { useEffect } from "react";

  
const CoursePath = () => {
  const { CourseId } = useParams();
    console.log('CourseIdCourseId',CourseId)
    
    const { data ,refetch} = useCourseById({id:CourseId});   
    useEffect(()=>{
     if(CourseId){
      refetch()
     }
    },[CourseId])
    console.log('datadatadatadata',data)
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