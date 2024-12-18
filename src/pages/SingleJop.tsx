  import { Box, Button, Typography } from "@mui/material";
  import { Link, useParams } from "react-router-dom";
  import { careerQuery } from "../app/services/queries";
  import Loader from "../components/common/Loader";
  import { useLanguageSelector } from "../app/slices/languageSlice";

  const SingleJop = () => {
    const { translations } = useLanguageSelector(
      (store) => store.languageReducer
    );
    const { id } = useParams<{ id: string }>();
    const { isLoading, data ,isError,error} = careerQuery(id);

    if (isLoading)
      return (
        <div className="flex h-96 justify-center items-center">
          <Loader />
        </div>
      );
    if (isError)
      return (
        <div className="h-96 flex justify-center items-center">
          {translations.Error}: {error?.message}
        </div>
      );
    return (
      <div>
        <div className="w-10/12 lg:w-3/5 mx-auto gap-10 items-start grid grid-cols-1 md:grid-cols-3 py-10">
          <div className="flex flex-col gap-3 lg:col-span-2">
            <Typography
              sx={{
                fontFamily: "typography",
                fontSize: "36px",
                fontWeight: "500",
                color: "dark.main",
                lineHeight: "57.6px",
              }}
            >
            {data?.data.data.title}
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", color: "gray.dark" }}
            >
              {data?.data.data.level}
            </Typography>

            <div className="">{data?.data.data.type} / {data?.data.data.work_type} / {data?.data.data.status} </div>
          </div>
          <Link to={`/jop-application/${id}`}>
            <Button
              sx={{
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "black.dark" },
                color: "background.default",
                fontWeight: "600",
                px: "30px",
                py: "15px",
                borderRadius: "5px",
              }}
            >
              {translations.ApplyJob}
            </Button>
          </Link>
        </div>
        <Box sx={{ bgcolor: "background.paper" }}>
          <div className="w-10/12 lg:w-3/5 mx-auto gap-10 items-start grid grid-cols-1 md:grid-cols-4 py-10">
            <div className="col-span-3">
            {<p dangerouslySetInnerHTML={{ __html: data?.data.data.description }} />}
              <div className="flex justify-center my-10">
                <Link to={`/jop-application/${id}`}>
                  <Button
                    sx={{
                      bgcolor: "primary.main",
                      "&:hover": { bgcolor: "black.dark" },
                      color: "background.default",
                      fontWeight: "600",
                      px: "30px",
                      py: "15px",
                      borderRadius: "5px",
                    }}
                  >
                    {translations.ApplyJob}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Box>
      </div>
    );
  };

  export default SingleJop;
