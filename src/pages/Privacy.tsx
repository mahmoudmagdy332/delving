import { privaciesQuery } from "../app/services/queries";
import Loader from "../components/common/Loader";
import Seo from "../components/common/Seo";

const Privacy = () => {
  const { data,isLoading,isError ,error} = privaciesQuery();
  console.log(data?.data);
  if (isLoading)
    return (
      <div className="flex h-96 justify-center items-center">
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
    <>
      <Seo
        title={data?.data.privacies[0].meta_title}
        image={data?.data.privacies[0].meta_image}
        description={data?.data.privacies[0].meta_description}
      />
      <div className="py-10 w-10/12 lg:w-3/4 xl:w-3/5 mx-auto min-h-96">
        {
          <p
            dangerouslySetInnerHTML={{
              __html: data?.data.privacies[0].description,
            }}
          />
        }
      </div>
    </>
  );
};

export default Privacy;
