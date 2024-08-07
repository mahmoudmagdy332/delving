import Categories from "../components/home/Categories"
import Departments from "../components/home/Departments"
import Hero from "../components/home/Hero"

import Works from "../components/home/Works"

const Home = () => {
  return (
   <div>
       <Hero/>
       <Categories/>
       <Works/>
       <Departments/>
   </div>
  )
}

export default Home