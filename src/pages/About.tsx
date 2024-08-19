import { useAboutUsSliceSelector } from "../app/slices/AboutusSlice";
import { UseAbout } from "../app/utils/hooks/UseAboutUs";
import Benefits from "../components/about/Benefits";
import Hero from "../components/about/Hero";
import Seo from "../components/common/Seo";

const About = () => {
  const { isLoading } = UseAbout();
  const { About } = useAboutUsSliceSelector((store) => store.AboutAsReducer);
  if (isLoading) {
    return <div>Loading...........</div>;
  }
  return (
    <div>
      {About && (
        <Seo
          title={About && About[0]?.meta_title}
          description={About && About[0]?.meta_description}
          keywords={About && About[0]?.meta_keywords}
        />
      )}
      <Hero />
      <Benefits />
    </div>
  );
};

export default About;
