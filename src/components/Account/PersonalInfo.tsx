import { Typography } from "@mui/material";
import Input from "../common/Input";
import CountrySelect from "./CountryInput";

function PersonalInfo() {
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
        Personal Info
      </Typography>

      <form className="py-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
        <div>
          <Input
            type="text"
            label="First name *"
            focusColor="black.dark"
            color="black"
          />
        </div>
        <div>
          <Input
            type="text"
            label="Last name *"
            focusColor="black.dark"
            color="black"
          />
        </div>
        <div>
          <Input
            type="text"
            label="Address"
            focusColor="black.dark"
            color="black"
          />
        </div>
        <div>
          <Input
            type="text"
            label="City *"
            focusColor="black.dark"
            color="black"
          />
        </div>
        <div>
          <Input
            type="text"
            label="State/province/region"
            focusColor="black.dark"
            color="black"
          />
        </div>
        <div>
          <Input
            type="text"
            label="Zip/postal code"
            focusColor="black.dark"
            color="black"
          />
        </div>
        <div>
          <CountrySelect />
        </div>
        <div>
          <Input
            type="text"
            label="Age *"
            focusColor="black.dark"
            color="black"
          />
        </div>
        <div>
          <Input
            type="text"
            label="Name of your current school"
            focusColor="black.dark"
            color="black"
          />
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
