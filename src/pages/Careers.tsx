import { useCareers } from "../app/utils/hooks/useCareers";
import Hero from "../components/careers/Hero";
import Openings from "../components/careers/Openings";

const Careers = () => {
  const { isLoading, isSuccess } = useCareers();

  return (
    <div>
      <Hero />
      <Openings loading={isLoading} success={isSuccess} />
    </div>
  );
};

export default Careers;
