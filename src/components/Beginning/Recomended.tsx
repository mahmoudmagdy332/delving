import { Typography } from "@mui/material";
import CourseCard from "../Account/CourseCard";

function Recomended() {
  const courses = [
    {
      image: "/images/PHOTOS/Frame.svg",
      title: "Fire Fighting",
      description: "Master key scientific ideas & technologies of the future",
    },
    {
      image: "/images/PHOTOS/Frame (1).svg",
      title: "Electrical Power",
      description: "Master key scientific ideas & technologies of the future",
    },
    {
      image: "/images/PHOTOS/Group (1).svg",
      title: "Fire Fighting",
      description: "Master key scientific ideas & technologies of the future",
    },
  ];
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
        {courses.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
}

export default Recomended;
