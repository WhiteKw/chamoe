import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import Divider from "@mui/material/Divider";
import LogoDevIcon from '@mui/icons-material/LogoDev';

import Definition from "Definition";

import Icon from "@mui/material/Icon";

import { Link, Outlet } from "react-router-dom";

const pages = [
    {
        title: "Test1",
        link: "/",
    },
];
const settings = ["Profile", "Logout"];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
        <AppBar position="static" sx={{ backgroundColor: "white", marginBottom: "100px"}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            {/* PC View */}
            {/* <LogoDevIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 3 }} /> */}
            <Link to={process.env.REACT_APP_ROOT_PATH + "/"}>
                <Typography>Logo</Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, height: "80px" }}>
                {pages.map((page, index) => {
                        if (index == 0) {
                            return (
                                <React.Fragment key={index}>
                                        <Button
                                            key={page.title}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 1, color: "#7A7D85", display: "block", width: "fit-content", textTransform: "none" }}
                                        >
                                            <Link to={page.link} style={{ color: "black", textDecoration: "none" }}>
                                                <Typography>{page.title}</Typography>
                                            </Link>
                                        </Button>
                                </React.Fragment>
                            );
                        } else {
                            return (
                                <React.Fragment key={index}>
                                        <Button
                                            key={page.title}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 1, color: "#7A7D85", display: "block", width: "fit-content", textTransform: "none" }}
                                        >
                                            <Link to={page.link} style={{ color: "black", textDecoration: "none" }}>
                                                <Typography>{page.title}</Typography>
                                            </Link>
                                        </Button>
                                </React.Fragment>
                            )
                        }
                    }
                )}
            </Box>
            {/* PC View */}

            {/* Mobile View */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: "block", md: "none" },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            {/* <LogoDevIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "arial",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                }}
            >
                Live Heroes
            </Typography>
            {/* Mobile View */}

            <Box sx={{ flexGrow: 0 }}>
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
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    	<Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>

        <Outlet />
    </>
  );
};

export default Navigation;
