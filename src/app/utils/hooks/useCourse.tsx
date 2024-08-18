import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCourses, setLastPage } from "../../slices/coursesSlice";
import { AllCoursesQuery } from "../../services/queries";

export const useAllCourses = () => {
  const dispatch = useDispatch();
  const { isSuccess, data, isLoading, isError, error } = AllCoursesQuery();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setCourses(data.data.courses.data));
      dispatch(setLastPage(data.data.courses.last_page));
    }
  }, [data, isSuccess]);

  return { data, isSuccess, isLoading, isError, error };
};
