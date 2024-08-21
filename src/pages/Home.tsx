import useHome from "../app/utils/hooks/useHome"
import Loader from "../components/common/Loader"
import Seo from "../components/common/Seo"
import Categories from "../components/home/Categories"
import Hero from "../components/home/Hero"
import Cookies from "js-cookie";
import Works from "../components/home/Works"
import Achieving from "../components/Beginning/Achieving"
import Learning from "../components/Beginning/Learning"
import Engineering from "../components/Premium/Engineering"

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
   <div className="w-10/12 lg:w-3/4 mx-auto md:grid lg:grid-cols-3 md:grid-cols-4">
      <div className="lg:col-span-1 md:col-span-2 ">
        <Achieving />
      </div>
      <div className="col-span-2 md:cols-span-2">
        <Learning />
      </div>
    </div>
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