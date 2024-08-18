import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { UsecoursesMutation } from "../../services/mutation";
import { setCourses, setLastPage } from "../../slices/coursesSlice";
import { AllCoursesQuery } from "../../services/queries";

export const useCoursesCategory = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { mutate, isSuccess, data, isPending, isError, error } =
    UsecoursesMutation();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setCourses(data.data.courses.data));
      dispatch(setLastPage(data.data.courses.last_page));
    }
  }, [data, isSuccess]);

  return { mutate, data, isSuccess, isPending, isError, error };
};


export const useAllCourses = () => {
  const { isSuccess, data, isLoading, isError, error } = AllCoursesQuery();

  return { data, isSuccess, isLoading, isError, error };
};

