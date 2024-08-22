import { Box, Button, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const SingleJop = () => {
  const { id } = useParams<{ id: string }>();

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
            Senior Producer (Machine Learning & Artificial Intelligence)
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "400", color: "gray.dark" }}
          >
            Americas
          </Typography>

          <div className="">Content / Full-time / Remote</div>
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
            Apply for this job
          </Button>
        </Link>
      </div>
      <Box sx={{ bgcolor: "background.paper" }}>
        <div className="w-10/12 lg:w-3/5 mx-auto gap-10 items-start grid grid-cols-1 md:grid-cols-4 py-10">
          <div className="col-span-3">
            especially in math, data, and CS/AI – and deliver a best-in-class
            interactive learning experience across web and apps. Our courses
            teach you what you need to know, while skipping the stuff you don’t
            – so expect more about solving equations, statistical analysis,
            logical deduction, neural networks, and generative AI, and less
            about abstract theorems and integrating complicated trig functions.
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
                  Apply for this job
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
