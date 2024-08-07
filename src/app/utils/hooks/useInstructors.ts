import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useEffect } from "react";
import { setInstructors, setLastPage } from "../../slices/instructorsSlice";
import { UseInstructorsQuery } from "../../services/queries";

export const UseInstructors = (currentPage: number) => {
  const dispatch = useDispatch<AppDispatch>();
  
  const { isSuccess, data, isLoading, isError, error,refetch } =UseInstructorsQuery(currentPage);
  console.log(data);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setInstructors(data?.data.instructors.data));
      dispatch(setLastPage(data.data.instructors.last_page));
    }
  });

  return { isSuccess, data, isLoading, isError, error,refetch };
};
