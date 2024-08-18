import { useEffect, useState } from "react";
import { useCartSliceSelector } from "../../slices/cartSlice";

const useCheckCourseInCart = (id:number) => {
  const [checked,setChecked]=useState(false)
  const {courses}=useCartSliceSelector(state=>state.cartReducer)
  useEffect(() => {
    if(courses instanceof Array && courses.filter((course)=>course.id===id).length>0)
      {
        setChecked(true)
      }else{
        setChecked(false)
      }
  }, [id]);

  return checked;
}

export default useCheckCourseInCart