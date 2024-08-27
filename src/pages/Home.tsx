import useHome from "../app/utils/hooks/useHome"
import Loader from "../components/common/Loader"
import Seo from "../components/common/Seo"
import Categories from "../components/home/Categories"
import Hero from "../components/home/Hero"
import Cookies from "js-cookie";
import Works from "../components/home/Works"
import Engineering from "../components/Premium/Engineering"
import MyLearning from "./MyLearning"
import { useUserSelector } from "../app/slices/UserSlice"

const Home = () => {
  const { isLoading, isError, error } = useHome();
  const { user } = useUserSelector((state) => state.UserReducer);

  if (isLoading)
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  if (isError)
    return (
      <div className="h-screen flex justify-center items-center">
        Error: {error?.message}
      </div>
    );
  return (
   <div>
     <Seo title='Home' description='START A LEARNING HABIT'/>
    {Cookies.get('access_token')&&user?.is_premium?(
      <MyLearning/>
    ):(
     <>
       
        <Hero/>
        <Categories/>
        <Works/>
        {/* <Departments/>   */}
        <Engineering />   
     </>
    )}
   </div>
  )
}

export default Home