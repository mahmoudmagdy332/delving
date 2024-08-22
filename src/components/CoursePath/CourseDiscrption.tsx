import { Typography } from "@mui/material"
import { useCoursesSliceSelector } from "../../app/slices/coursesSlice";

const CourseDiscrption = () => {
  const { singleCourse } = useCoursesSliceSelector(
    (state) => state.CoursesReducer
  );
  return (
    <div>
        <div className="flex flex-col gap-8 py-8  border-t">
            <Typography sx={{fontWeight:'700',fontSize:'18px',color:'dark.main'}}>Course description </Typography>
            <Typography  sx={{fontWeight:'400',fontSize:'17px',color:'dark.main',lineHeight:'36px'}}>
              {singleCourse?.description}
            </Typography>
        </div>
    </div>
  )
}

export default CourseDiscrption