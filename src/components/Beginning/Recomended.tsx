import { Typography } from "@mui/material";
import { useHomeSliceSelector } from "../../app/slices/homeSlice";
import CourseCard from "./CourseCard";

function Recomended() {
  const { newCourses } = useHomeSliceSelector((state) => state.homeReducer);

  return (
    <div className="flex flex-col gap-4 p-4">
      <Typography
        variant="h3"
        sx={{
          color: "dark.main",
          my: 4,
        }}
      >
        Recommended for you
      </Typography>
      <div className="grid  grid-cols-1  sm:grid-cols-2  gap-4">
        {newCourses?.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
}

export default Recomended;
