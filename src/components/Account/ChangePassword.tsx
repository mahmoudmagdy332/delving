import { Typography } from "@mui/material";
import Input from "../common/Input";

function ChangePassword() {
  return (
    <div className="w-11/12 lg:w-3/4 mx-auto">
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

      <div className="flex flex-col gap-4">
        <div>
          <Input
            type="password"
            label="current password"
            focusColor="black.dark"
            color="black"
          />
        </div>
        <div>
          <Input
            type="password"
            label="new password"
            focusColor="black.dark"
            color="black"
          />
        </div>
        <div>
          <Input
            type="password"
            label="confirm new password"
            focusColor="black.dark"
            color="black"
          />
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
