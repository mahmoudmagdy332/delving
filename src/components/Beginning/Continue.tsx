import { Typography } from "@mui/material";
import { useMylearningsSelector } from "../../app/slices/myLearningSlice";
import CourseCard from "./CourseCard";
import Pagination from "./Pagination";

const Continue = () => {
    const {mylearnings} = useMylearningsSelector((state) => state.myLearningReducer);

  return (
    <div className="flex flex-col gap-4 p-4">
      <Typography
        variant="h3"
        sx={{
          color: "dark.main",
          my: 4,
        }}
      >
        Continue learning
      </Typography>
      <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8">
        {mylearnings.data.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
      <Pagination/>
    </div>
  )
}

export default Continue