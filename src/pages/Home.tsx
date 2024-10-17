import useHome from "../app/utils/hooks/useHome";
import Loader from "../components/common/Loader";
import Seo from "../components/common/Seo";
import Categories from "../components/home/Categories";
import Hero from "../components/home/Hero";
import Cookies from "js-cookie";
import Works from "../components/home/Works";
import Engineering from "../components/Premium/Engineering";
import MyLearning from "./MyLearning";
import { useUserSelector } from "../app/slices/UserSlice";
import Partners from "../components/home/Partners";
import { useLanguageSelector } from "../app/slices/languageSlice";

const Home = () => {
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
  const { isLoading, isError, error } = useHome();
  const { user } = useUserSelector((state) => state.UserReducer);

  if (isLoading)
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  if (isError)
    return (
      <div className="h-screen flex justify-center items-center">
        {translations.Error}: {error?.message}
      </div>
    );
  return (
    <div>
      <Seo title="Home" description="START A LEARNING HABIT" />
      {Cookies.get("access_token") && user?.is_premium ? (
        <MyLearning />
      ) : (
        <>
          <Hero />
          <Categories />
          <Works />
          {/* <Departments/>   */}
          <Engineering />
          <Partners />
        </>
      )}
    </div>
  );
};

export default Home;
