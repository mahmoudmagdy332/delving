import { Typography } from "@mui/material";
import React from "react";
import Input from "../common/Input";

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
        }}
      >
        Personal Info
      </Typography>

      <form className="py-2 grid grid-cols-2 gap-6">
        <div>
          <Input
            type="text"
            label="First name *"
            focusColor="red"
            color="black"
          />
        </div>
        <div>
          <Input
            type="text"
            label="Last name *"
            focusColor="red"
            color="black"
          />
        </div>
        <div>
          <Input type="text" label="Address" focusColor="red" color="black" />
        </div>
        <div>
          <Input type="text" label="City *" focusColor="red" color="black" />
        </div>
        <div>
          <Input
            type="text"
            label="State/province/region"
            focusColor="red"
            color="black"
          />
        </div>
        <div>
          <Input
            type="text"
            label="Zip/postal code"
            focusColor="red"
            color="black"
          />
        </div>
        <div>
          <Input
            type="select"
            label="Country *"
            focusColor="red"
            color="black"
          />
        </div>
        <div>
          <Input type="text" label="Age *" focusColor="red" color="black" />
        </div>
        <div>
          <Input
            type="text"
            label="Name of your current school"
            focusColor="red"
            color="black"
          />
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
