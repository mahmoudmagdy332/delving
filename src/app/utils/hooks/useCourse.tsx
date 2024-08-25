import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCourses, setSingleCourse } from "../../slices/coursesSlice";
import { CourseIdQuery, CoursesQuery, MyLearningIdQuery } from "../../services/queries";
import { CoursesParams } from "../types/types";
import Cookies from "js-cookie";
import { useUserSelector } from "../../slices/UserSlice";

export const useCourses = ({ name, id }: CoursesParams) => {
  console.log(id);

  const dispatch = useDispatch();
  const { isSuccess, data, isLoading, isError, error} = CoursesQuery({
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

export const useCourseById = ({ id }: {id:string|undefined}) => {
  const token=Cookies.get('access_token')
  const { user } = useUserSelector((state) => state.UserReducer);
  let resalt;
 
    if(token&&user&&user.is_premium){
      resalt= MyLearningIdQuery(id);
    } else{
      resalt=CourseIdQuery(id);
    }

  const { isSuccess, data, isLoading, isError, error,refetch }=resalt;
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      console.log(data?.data);

      dispatch(setSingleCourse(data.data.data));
    }
  }, [data]);



  if (isError) {
    console.error("Error fetching courses:", error);
  }

  return { data, isSuccess, isLoading, isError, error ,refetch};
};

