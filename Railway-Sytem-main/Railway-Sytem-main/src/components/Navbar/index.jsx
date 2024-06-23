import { Avatar, Box, Menu, MenuItem } from "@mui/material";
import { AuthContext } from "../context/AuthProvider";
import useMediaQuery from "../customHook/useMediaQuerry";
import { Bars, Nav, NavLink, NavMenu, Title } from "./NavbarElements";
import React, { useContext, useState } from "react";
import { deepPurple } from "@mui/material/colors";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const menuRef = React.useRef();
  const { user } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === "menu-icon") {
        return;
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsShowMenu(false);
      }
      event.stopPropagation();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isBelow768 = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {location.pathname !== "/admin" && (
        <Nav>
          <Title>
            <h3>Railway E-Ticketing Service</h3>
          </Title>
          <Bars
            id="menu-icon"
            onClick={(e) => {
              setIsShowMenu((previous) => !previous);
              e.stopPropagation();
            }}
          />
          {isShowMenu && isBelow768 && (
            <div ref={menuRef} className="absolute right-4 bg-black top-16 ">
              <NavLink to="/home" activestyle={String(true)}>
                Home
              </NavLink>

              <NavLink to="/bookingInformation" activestyle={String(true)}>
                Booking information
              </NavLink>
              {!user?.uid && (
                <>
                  <NavLink to="/login" activestyle={String(true)}>
                    Login
                  </NavLink>
                  <NavLink to="/register" activestyle={String(true)}>
                    Register
                  </NavLink>
                </>
              )}
              {user?.uid && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                    onClick={handleClick}
                  >
                    <Avatar
                      sx={{ bgcolor: deepPurple[500], cursor: "pointer" }}
                    />
                  </Box>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              )}
            </div>
          )}
          <NavMenu id="menu">
            <NavLink to="/home" activestyle={String(true)}>
              Home
            </NavLink>

            <NavLink to="/bookingInformation" activestyle={String(true)}>
              Booking information
            </NavLink>
            {!user?.uid && (
              <>
                <NavLink to="/login" activestyle={String(true)}>
                  Login
                </NavLink>
                <NavLink to="/register" activestyle={String(true)}>
                  Register
                </NavLink>
              </>
            )}

            {user?.uid && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    position: "relative",
                  }}
                  onClick={handleClick}
                >
                  <Avatar
                    sx={{ bgcolor: deepPurple[500], cursor: "pointer" }}
                  />
                </Box>
                <Box>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={{ position: "absolute", top: "10px" }}
                  >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </Box>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  sx={{ position: "absolute", top: "10px" }}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </NavMenu>
        </Nav>
      )}
    </>
  );
};

export default Navbar;
