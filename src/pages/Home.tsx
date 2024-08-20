import useHome from "../app/utils/hooks/useHome"
import Loader from "../components/common/Loader"
import Seo from "../components/common/Seo"
import Categories from "../components/home/Categories"
import Departments from "../components/home/Departments"
import Hero from "../components/home/Hero"

import Works from "../components/home/Works"

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
       <Seo title='Home' description='sadasdsa'/>
       <Hero/>
       <Categories/>
       <Works/>
       <Departments/>
   </div>
  )
}

export default Home