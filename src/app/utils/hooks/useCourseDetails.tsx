import { useEffect } from "react";
import { useSingleCourseMutation } from "../../services/mutation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setSingleCourse } from "../../slices/CourseDetailsSlice";

function useCourseDetails() {
  const dispatch = useDispatch<AppDispatch>();

  const { isSuccess, mutate, data, isPending, isError, error } =
    useSingleCourseMutation();

  useEffect(() => {
    if (isSuccess) dispatch(setSingleCourse(data.data.course));
  }, [data, isSuccess]);

  return { data, isSuccess, isPending, mutate, isError, error };
}

export default useCourseDetails;

