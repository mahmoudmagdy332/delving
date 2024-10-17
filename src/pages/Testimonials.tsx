import { Box, Button, Typography } from "@mui/material";
import HeaderLayout from "../components/common/HeaderLayout";
import CardTestimonial from "../components/testimonials/CardTestimonial";
import { TestimonialQuery } from "../app/services/queries";
import { useEffect, useState } from "react";
import { testimonial } from "../app/utils/types/types";
import TestimonialLoader from "../components/common/TestimonialsLoader";
import { useLanguageSelector } from "../app/slices/languageSlice";

const Testimonials = () => {
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
  const [Testimonials, setTestimonials] = useState<testimonial[] | null>();
  const { data, isLoading, isSuccess } = TestimonialQuery();

  useEffect(() => {
    if (data && isSuccess) {
      setTestimonials(data.data.testimonials);
    }
  }, [data]);

  const listItems = [
    "All",
    "STUDENTS",
    "TEACHERS",
    "LIFE-LONG LEARNERS",
    "LIPROFESSIONALS",
    "PARENTS",
  ];

  return (
    <div className="py-10 w-10/12 mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center">
          <HeaderLayout>
            <Typography
              sx={{
                color: "text.primary",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {translations.Our}{" "}
              <Box component="span" sx={{ color: "yellow.main" }}>
                {translations.Testimonials}
              </Box>
            </Typography>
          </HeaderLayout>
        </div>
        <div className="flex justify-center ">
          <Typography
            className="xl:w-3/4"
            sx={{
              lineHeight: "36px",
              color: "text.primary",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            {translations.TestimonialsDetails}
          </Typography>
        </div>
        <div className="flex justify-center mb-10">
          <img
            alt=""
            src="/images/PHOTOS/shutterstock_663157873 [Converted] 1.png"
          />
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap lg:justify-between  gap-4 xl:w-3/4 ">
            {listItems.map((item) => (
              <Button
                sx={{
                  border: "1px solid gray",
                  color: "text.primary",
                  py: "8px",
                  px: "10px",
                  borderRadius: "5px",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "primary.dark",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2  gap-8">
          {isLoading
            ? [...Array(5)].map(() => (
                <div>
                  <TestimonialLoader />
                </div>
              ))
            : Testimonials?.map((item) => (
                <CardTestimonial key={item.id} item={item} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
