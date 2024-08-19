import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { Box, Input, Typography } from "@mui/material";

function Hero() {
  return (
    <Box
      className="p-20 "
      sx={{
        bgcolor: "black.main",
      }}
    >
      <img src="/images/LOGO/HelpLogo.svg" alt="" />
      <div className="flex flex-col gap-8">
        <Typography
          sx={{
            color: "white",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Advice and answers from the DELVENG Team
        </Typography>
        <form className="flex grow">
          <div className="relative flex grow">
            <Input
              disableUnderline
              sx={{
                color: "black.dark",
                bgcolor: "black.light",
              }}
              type="text"
              id="search"
              className="p-2.5 ps-12 h-12 py-5 w-64  outline-none grow text-sm  border font-semibold border-gray-500 rounded-lg bg-transparent focus:ring-gray-50  "
              placeholder="Search for articles... "
              required
            />
            <div className="absolute inset-y-0 start-5 flex items-center pointer-events-none">
              <SearchTwoToneIcon />
            </div>
          </div>
        </form>
      </div>
    </Box>
  );
}

export default Hero;
