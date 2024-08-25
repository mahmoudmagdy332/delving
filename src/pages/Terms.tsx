import { TermsQuery } from "../app/services/queries";
import Loader from "../components/common/Loader";

const Terms = () => {
  const { isLoading, data ,isError,error} = TermsQuery();

  if (isLoading)
    return (
      <div className="flex h-96 justify-center items-center">
        <Loader />
      </div>
    );
  if (isError)
    return (
      <div className="h-96 flex justify-center items-center">
        Error: {error?.message}
      </div>
    );
  return (
    <div className="py-10 w-10/12 lg:w-3/4 xl:w-3/5 mx-auto">
      {<p dangerouslySetInnerHTML={{ __html: data?.data.terms.description }} />}
    </div>
  );
};

export default Terms;
