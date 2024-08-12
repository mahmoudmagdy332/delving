import { Typography } from "@mui/material";

function Avatar() {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto">
      <Typography
        sx={{
          color: "dark.main",
          fontSize: "24px",
          fontWeight: "bold",
          borderBottom: "1px black solid",
          my: "10px",
        }}
      >
        Delve into Engineering
      </Typography>
    </div>
  );
}

export default Avatar;
