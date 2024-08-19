import { TermsQuery } from "../app/services/queries";

const Terms = () => {
  const { isLoading, data } = TermsQuery();

  if (isLoading) {
    return <div>Loading .....</div>;
  }
  return (
    <div className="py-10 w-10/12 lg:w-3/4 xl:w-3/5 mx-auto">
      {<p dangerouslySetInnerHTML={{ __html: data?.data.terms.description }} />}
    </div>
  );
};

export default Terms;
