import { Typography } from "@mui/material";
import { useMylearningsSelector } from "../../app/slices/myLearningSlice";
import CourseCard from "./CourseCard";

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
      <div className="grid  grid-cols-1  sm:grid-cols-2  gap-4">
        {mylearnings.data.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  )
}

export default Continue