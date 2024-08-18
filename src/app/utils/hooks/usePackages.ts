import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { UsePackagesQuery } from "../../services/queries";
import { useEffect } from "react";
import { setLastPage, setPackages } from "../../slices/PackagesSlice";

export const UsePackages = (currentPage: number) => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    isSuccess,
    data: packagesData,
    isLoading,
    isError,
    error,
    refetch,
  } = UsePackagesQuery(currentPage);

  console.log(packagesData);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setPackages(packagesData?.data.package.data));
      dispatch(setLastPage(packagesData.data.package.last_page));
    }
  });

  return { isSuccess, packagesData, isLoading, isError, error, refetch };
};
