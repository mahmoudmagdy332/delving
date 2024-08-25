import useHome from "../app/utils/hooks/useHome"
import Loader from "../components/common/Loader"
import Seo from "../components/common/Seo"
import Categories from "../components/home/Categories"
import Hero from "../components/home/Hero"
import Cookies from "js-cookie";
import Works from "../components/home/Works"
import Engineering from "../components/Premium/Engineering"
import MyLearning from "./MyLearning"

const Home = () => {
  const { isLoading, isError, error } = useHome();
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
    {Cookies.get('access_token')?(
      <MyLearning/>
    ):(
     <>
        <Seo title='Home' description='sadasdsa'/>
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