import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useEffect } from "react";
import { setBooks } from "../../slices/booksSlice";
import { setLastPage } from "../../slices/coursesSlice";
import { UseBooksMutations } from "../../services/mutation";

export const useBooks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isSuccess, data, isPending, isError, error, mutate } =
  UseBooksMutations();
  useEffect(() => {
    if (isSuccess) {
      console.log("boooook", data);
      dispatch(setBooks(data.data.book.data));
      dispatch(setLastPage(data.data.book.last_page));
    }
  }, [data, isSuccess]);

  return { isSuccess, data, isPending, isError, error, mutate };
};
