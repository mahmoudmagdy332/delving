import { useDispatch } from "react-redux";
import { setSingleCourse } from "../../slices/CourseDetailsSubscription";
import { AppDispatch } from "../../store";
import { useEffect } from "react";
import { useSubscribedCourseMutation } from "../../services/mutation";

function useCourseDetailSubscription() {
  const dispatch = useDispatch<AppDispatch>();

  const { isSuccess, mutate, data, isPending, isError, error } =
    useSubscribedCourseMutation();

  console.log(data?.data);

  useEffect(() => {
    if (isSuccess) dispatch(setSingleCourse(data.data.course));
  }, [data, isSuccess]);

  return { data, isSuccess, isPending, mutate, isError, error };
}

export default useCourseDetailSubscription;
