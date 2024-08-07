import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useEffect } from "react";
import { UseBooksQuery } from "../../services/queries";
import { setBooks } from "../../slices/booksSlice";
import { setLastPage } from "../../slices/coursesSlice";

export const useBooks = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {isSuccess, data, isPending, isError, error,refetch } =UseBooksQuery();
    useEffect(() => {
      if (isSuccess) {
        console.log('boooook',data)
        dispatch(setBooks(data.data.book.data));
        dispatch(setLastPage(data.data.book.last_page));
      }
    }, [data, isSuccess]);
  
    return {  data, isSuccess, isPending, isError, error ,refetch};
  };
  