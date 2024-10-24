import { useParams } from "react-router-dom";
import { pageQuery } from "../app/services/queries";
import Loader from "../components/common/Loader";
import { useLanguageSelector } from "../app/slices/languageSlice";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import HeaderLayout from "../components/common/HeaderLayout";

const Page = () => {
const { translations } = useLanguageSelector(
    (store) => store.languageReducer
    );
const { id } = useParams<{ id: string }>();
const { isLoading, data ,isError,error,refetch} = pageQuery(id);
useEffect(()=>{
    refetch();
},[id])

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
    <div className="w-10/12 lg:w-3/4 mx-auto my-20 ">
    <div className="flex flex-col gap-5 items-center">
      <HeaderLayout>
        <Typography
          sx={{
            fontSize: "28px",
            px: "10px",
            fontFamily: "Cairo",
            fontWeight: "bold",
          }}
        >
         {data?.data.data.title}
        </Typography>
      </HeaderLayout>
   
        {data &&(
          <div
        dangerouslySetInnerHTML={{ __html: data.data.data.description }}
        className=" text-center"
        
      />
        ) }

    </div>
  </div>
  )
}

export default Page