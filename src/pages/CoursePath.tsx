import CourseDiscrption from "../components/CoursePath/CourseDiscrption"
import ExploreCource from "../components/CoursePath/ExploreCource"
import Path from "../components/CoursePath/Path"

  
const CoursePath = () => {
  return (
    <div className="w-11/12 lg:w-3/4 mx-auto gap-10 flex flex-col md:flex-row">
         <div className="w-2/5 relative">
           <ExploreCource/> 
         </div>
         <div className="w-3/5">
         <Path/>
         <CourseDiscrption/>
         </div>
    </div>
  )
}

export default CoursePath