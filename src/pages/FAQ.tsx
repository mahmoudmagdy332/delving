import { Box, Typography } from "@mui/material";
import HeaderLayout from "../components/common/HeaderLayout";
import Quetions from "../components/common/Quetions";
import { UseFQs } from "../app/utils/hooks/UsFQs";
import Loader from "../components/common/Loader";
import { useLanguageSelector } from "../app/slices/languageSlice";

const FAQ = () => {
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
  const { isLoading } = UseFQs();
  // const listItems=['All',"STUDENTS","TEACHERS","LIFE-LONG LEARNERS","LIPROFESSIONALS","PARENTS"]

  if (isLoading) {
    <div className="flex h-screen justify-center items-center">
      <Loader />
    </div>;
  }
  return (
    <div className="py-10 w-10/12 mx-auto">
      <div className="flex flex-col gap-16">
        <div className="flex justify-center">
          <HeaderLayout>
            <Typography
              sx={{
                color: "text.primary",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {translations.FrequentlyAsked}
              <Box component="span" sx={{ color: "yellow.main" }}>
                {translations.Questions}
              </Box>
            </Typography>
          </HeaderLayout>
        </div>

        {/* <div className="flex justify-center">
          <div className="flex flex-wrap lg:justify-between  gap-4 xl:w-3/4 ">
             {listItems.map((item)=>(
               <Button sx={{border:"1px solid gray",color:'text.primary',py:'8px',px:'10px',borderRadius:'5px','&:hover':{borderColor:'primary.main',bgcolor:'primary.dark'}}}>
                 {item}
               </Button>
             ))}
           </div>
          </div> */}
        <Quetions />
      </div>
    </div>
  );
};

export default FAQ;
