import { privaciesQuery } from "../app/services/queries";
import Seo from "../components/common/Seo";

const Privacy = () => {
  const { data } = privaciesQuery();
  console.log(data?.data);

  return (
    <>
      <Seo
        title={data?.data.privacies[0].meta_title}
        image={data?.data.privacies[0].meta_image}
        description={data?.data.privacies[0].meta_description}
      />
      <div className="py-10 w-10/12 lg:w-3/4 xl:w-3/5 mx-auto">
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
