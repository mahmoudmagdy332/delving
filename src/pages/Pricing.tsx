import { UsePackages } from "../app/utils/hooks/UsePackage";
import Hero from "../components/pricing/Hero";
import Planes from "../components/pricing/Planes";
const Pricing = () => {
  UsePackages();

  return (
    <div>
      <Hero />
      <Planes />
    </div>
  );
};

export default Pricing;
