import { useAboutUsSliceSelector } from "../app/slices/AboutusSlice";
import { UseAbout } from "../app/utils/hooks/UseAboutUs";
import Benefits from "../components/about/Benefits";
import Hero from "../components/about/Hero";
import Loader from "../components/common/Loader";
import Seo from "../components/common/Seo";

const About = () => {
  const { isLoading ,isError,error} = UseAbout();
  const { About } = useAboutUsSliceSelector((store) => store.AboutAsReducer);

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

        <Seo
          title={About ? About[0].meta_title:""}
          description={About ? About[0]?.meta_description:""}
          keywords={About ? About[0]?.meta_keywords:""}
        />

      <Hero />
      <Benefits />
    </div>
  );
};

export default About;
