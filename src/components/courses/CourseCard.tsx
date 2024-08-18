import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { course } from "../../app/utils/types/types";
import React from "react";

interface courseProps {
  course: course;
}
const CourseCard: React.FC<courseProps> = ({ course }) => {
  return (
    <div className="w-full flex flex-col gap-5  border rounded-md p-4">
      <div className="flex justify-center mb-3">
        <img src={course?.image} className="w-3/4" />
      </div>
      <h3 className="font-semibold text-xl">{course?.name}</h3>
      <p className=" text-sm">{course?.description}</p>
      <Link to={`/courses/${course?.id}`}>
        <Button
          sx={{
            color: "black.light",
            fontSize: "14px",
            fontWeight: "600",
            width: "100%",
            bgcolor: "gray.dark",
            py: "8px",
            my: "10px",
            "&:hover": {
              bgcolor: "primary.light",
            },
          }}
        >
          View path
        </Button>
      </Link>
    </div>
  );
};

export default CourseCard;
