import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useMode } from "../../Theme";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.background.default,

  transition: "color 0.2s ease-in-out",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  "&.active": {
    fontWeight: "bold",
    color: theme.palette.primary.dark,
  },
}));

const AccountSide = () => {
  const [theme] = useMode();
  console.log(theme.palette);

  const location = useLocation();

  return (
    <Box
      className="w-11/12 lg:w-3/4 mt-12 pt-8 pb-4 mx-auto flex flex-col gap-4"
      sx={{
        color: theme.palette.text.primary,
        borderBottom: `2px solid ${theme.palette.divider}`,
        borderTop: `2px solid ${theme.palette.divider}`,
      }}
    >
      <StyledLink
        to="/account"
        className={location.pathname === "/account" ? "active" : ""}
      >
        Avatar
      </StyledLink>
      <StyledLink
        to="/account/personal"
        className={location.pathname === "/account/personal" ? "active" : ""}
      >
        Personal Info
      </StyledLink>
      <StyledLink
        to="/account/password"
        className={location.pathname === "/account/password" ? "active" : ""}
      >
        Password
      </StyledLink>
      <StyledLink
        to="/account/myCourses"
        className={location.pathname === "/account/myCourses" ? "active" : ""}
      >
        Courses
      </StyledLink>
    </Box>
  );
};

export default AccountSide;
