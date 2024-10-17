import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleLogin from "../components/auth/login/GoogleLogin";
import { useLanguageSelector } from "../app/slices/languageSlice";

const Login = () => {
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
  return (
    <div className="w-10/12 lg:w-9/12 mx-auto grid lg:grid-cols-2 items-center gap-y-5 gap-x-20 my-10">
      <img alt="" src="/images/PHOTOS/signup.svg" />
      <div className="mt-10">
        <div className="flex flex-col gap-8 items-center">
          <GoogleLogin />
          <Box
            sx={{
              borderWidth: "1px 1px 3px 1px",
              borderStyle: "solid",
              borderColor: "black.dark",
            }}
            className="cursor-pointer transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2 w-full "
          >
            <img alt="" src="/images/ICONS/facebook.svg" />
            {translations.LogFacebook}
          </Box>
          <Link to="/Login-with-email" className="w-full">
            <Box
              sx={{
                backgroundColor: "gray.dark",
                color: "gray.light",
                borderWidth: "1px 1px 3px 1px",
                borderStyle: "solid",
                borderColor: "black.dark",
              }}
              className="cursor-pointer  transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2 w-full "
            >
              {translations.LogEmail}
            </Box>
          </Link>

          <div className="flex gap-2">
            {translations.Newuser}{" "}
            <Link to="/signup">{translations.signup}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
