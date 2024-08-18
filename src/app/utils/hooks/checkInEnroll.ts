import { book, course, Package } from "../types/types";


export const checkEnroll=(ShopCourses: course[] | null, ShopBooks: book[] | null, ShopPackages: Package[] | null, courses: course[], Packages: Package[], books: book[])=>{
  let ch=true;
  ShopCourses?.map((ShopCourse)=>{
    const arr=courses?.filter((course)=>course.id===ShopCourse.id);
    if(arr instanceof Array &&arr.length>0){
      ch=false;
      return;
    }
  })

  ShopPackages?.map((ShopPackag)=>{
    const arr=Packages?.filter((Package)=>Package.id===ShopPackag.id);
    if(arr instanceof Array &&arr.length>0){
      ch=false;
      return;
    }
  })
  if(ch)
  ShopBooks?.map((ShopBook)=>{
    const arr=books?.filter((book)=>book.id===ShopBook.id);
    if(arr instanceof Array &&arr.length>0){
      ch=false;
    }
  })
  return ch;
}