import { UseAbout } from "../app/utils/hooks/UseAboutUs"
import Benefits from "../components/about/Benefits"
import Hero from "../components/about/Hero"

const About = () => {

  const {isLoading}=UseAbout()
  if (isLoading) {
    return <div>Loading...........</div>
  }
  return (
    <div>
        <Hero/>
        <Benefits/>
    </div>
  )
}

export default About