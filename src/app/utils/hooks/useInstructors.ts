import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useEffect } from "react";
import { setInstructors, setLastPage } from "../../slices/instructorsSlice";
import {
  useCategoryInstructorsMutation,
  UseInstructorsMutations,
} from "../../services/mutation";
import { setCategoryInstructors } from "../../slices/CategoryInstructorSlice";

export const UseInstructors = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isSuccess, data, isPending, isError, error, mutate } =
    UseInstructorsMutations();
  console.log(data);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setInstructors(data?.data.instructors.data));
      dispatch(setLastPage(data.data.instructors.last_page));
    }
  });

  return { isSuccess, data, isPending, isError, error, mutate };
};

export const UseCategoryInstructors = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isSuccess, data, isPending, isError, error, mutate } =
    useCategoryInstructorsMutation();

  useEffect(() => {
    if (isSuccess) {
      console.log(data.data.instructors);

      dispatch(setCategoryInstructors(data?.data.instructors));
    }
  }, [data, isSuccess]);

  return { isSuccess, data, isPending, isError, error, mutate };
};
