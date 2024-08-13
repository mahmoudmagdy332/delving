import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

function Avatar() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "92%",
        maxWidth: "75%",
        mx: "auto",
        mb: 1,
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
          width: "100%",
        },
      }}
    >
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
        Avatar
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        spacing={2}
        mb={1}
        pr={{ xs: 0, sm: 5 }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "dark.main",
            fontWeight: "600",
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.25rem",
            },
          }}
        >
          Upload new:
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "dark.main",
            fontWeight: "600",
            mt: { xs: 2, sm: 0 },
          }}
        >
          You haven't uploaded a profile picture yet.
        </Typography>
      </Stack>
      <Typography
        sx={{
          color: "dark.main",
          fontSize: "15px",
          pl: 4,
          mt: 4,
          fontWeight: "500",
          [theme.breakpoints.down("sm")]: {
            pl: 2,
            mt: 2,
            fontSize: "14px",
          },
        }}
      >
        No file chosen
      </Typography>
      <div className="my-4">
        <Button
          aria-label="Upload new profile picture"
          sx={{
            borderRadius: "20px",
            backgroundColor: "primary.main",
            color: "white",
            fontSize: "16px",
            px: 6,
            border: "2px solid black.dark",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "yellow.dark",
              color: "black.light",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "14px",
              px: 3,
            },

            [theme.breakpoints.down("md")]: {
              fontSize: "14px",
              px: 3,
            },
          }}
        >
          Choose file
        </Button>
      </div>
      <div>
        <Button
          disabled={true}
          aria-label="Upload new profile picture"
          sx={{
            borderRadius: "20px",
            backgroundColor: "black.light",
            color: "white",
            fontSize: "16px",
            px: 15,
            border: "2px solid black.dark",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "yellow.dark",
              color: "black.light",
            },
            [theme.breakpoints.down("sm")]: {
              px: 8,
              fontSize: "14px",
            },
          }}
        >
          Upload new image
        </Button>
      </div>
    </Box>
  );
}

export default Avatar;
