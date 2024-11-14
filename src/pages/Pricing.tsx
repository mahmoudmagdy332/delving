import { useEffect, useState } from "react";
import { UsePackages } from "../app/utils/hooks/UsePackage";
import Hero from "../components/pricing/Hero";
import Planes from "../components/pricing/Planes";
const Pricing = () => {
  const [ip, setIp] = useState("");

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIp(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIpAddress();
  }, []);
  UsePackages(ip);
  
  return (
    <div>
      <Hero />
      <Planes />
    </div>
  );
};

export default Pricing;
