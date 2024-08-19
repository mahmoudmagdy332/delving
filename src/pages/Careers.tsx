import { useCareers } from "../app/utils/hooks/useCareers";
import Hero from "../components/careers/Hero";
import Openings from "../components/careers/Openings";

const Careers = () => {
  const { isLoading } = useCareers();
  if (isLoading) {
    return <div>Loading ...........</div>
    
  }
  return (
    <div>
      <Hero />
      <Openings />
    </div>
  );
};

export default Careers;
