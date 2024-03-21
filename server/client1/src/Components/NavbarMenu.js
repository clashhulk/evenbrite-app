import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { InputBase, alpha, styled } from "@mui/material";
import { GridSearchIcon } from "@mui/x-data-grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const settings = ["Profile", "Dashboard", "Logout"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "55ch",
  height: "5ch",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function NavbarMenu() {
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    // Redirect to login page
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "whitesmoke" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,

                textDecoration: "none",
                color: "red",
              }}
            >
              eventbrite
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box>
              <Search sx={{ marginRight: "18px" }}>
                <SearchIconWrapper>
                  <GridSearchIcon sx={{ color: "grey" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search events"
                  inputProps={{ "aria-label": "search" }}
                  sx={{ color: "GrayText" }}
                />
              </Search>
            </Box>
          </div>
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{ my: 2, color: "grey", display: "block" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                ALL EVENTS
              </Button>
              <Button
                sx={{ my: 2, color: "grey", display: "block" }}
                onClick={() => {
                  navigate("/add-event");
                }}
              >
                ADD EVENT
              </Button>

              <Button
                sx={{ my: 2, color: "grey", display: "block" }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
              <Button
                sx={{ my: 2, color: "grey", display: "block" }}
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                Sign up
              </Button>
              <Button
                sx={{ my: 2, color: "grey", display: "block" }}
                onClick={() => {
                  navigate("/fav-events");
                }}
              >
                <FavoriteIcon sx={{ fill: "currentcolor" }} />
              </Button>
            </Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) =>
                setting === "Logout" ? (
                  <MenuItem key={setting} onClick={handleLogout}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ) : (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarMenu;
