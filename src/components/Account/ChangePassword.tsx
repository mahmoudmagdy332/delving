import { Typography } from "@mui/material";
import PasswordInput from "./PasswordInput";

function ChangePassword() {
  return (
    <div className="w-11/12 lg:w-3/4 mx-auto my-6">
      <Typography
        className=""
        variant="h3"
        sx={{
          color: "dark.main",
          borderBottom: "2px solid",
          borderBottomColor: "dark.main",
          p: "0 0 20px 0 ",
        }}
      >
        Change Password
      </Typography>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Typography
            sx={{
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
            }}
          >
            current Password: <span className="ms-2 text-red-600">*</span>
          </Typography>
          <PasswordInput />
        </div>
        <div className="flex flex-col gap-2">
          <Typography
            sx={{
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
            }}
          >
            New Password <span className="ms-2 text-red-600">*</span>
          </Typography>
          <PasswordInput />
        </div>
        <div className="flex flex-col gap-2">
          <Typography
            sx={{
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
            }}
          >
            confirm current Password{" "}
            <span className="ms-2 text-red-600">*</span>
          </Typography>
          <PasswordInput />
        </div>
        <div className="p-4 border-2 rounded-full">
          <button className="w-full whitespace-nowrap">
            Update personal info
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
