import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCourses } from "../../slices/coursesSlice";
import { CoursesQuery } from "../../services/queries";
import { CoursesParams } from "../types/types";

export const useCourses = ({ name, id }: CoursesParams) => {
  console.log(id);

  const dispatch = useDispatch();
  const { isSuccess, data, isLoading, isError, error } = CoursesQuery({
    name,
    id,
  });

  useEffect(() => {
    if (data) {
      console.log(data?.data);

      dispatch(setCourses(data.data.data.courses.data));
    }
  }, [data]);

  if (isError) {
    console.error("Error fetching courses:", error);
  }

  return { data, isSuccess, isLoading, isError, error };
};
