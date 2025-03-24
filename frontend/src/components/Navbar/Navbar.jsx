import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function Navbar({ toggleSidebar }) {
    const theme = useTheme();
  
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "primary.main",
        height: "64px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Ícone de Menu - Toggling Sidebar */}
        <IconButton onClick={toggleSidebar} color="inherit">
          <MenuIcon />
        </IconButton>

        {/* Nome e Avatar do usuário */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Avatar com a foto do usuário */}
          <Avatar
            alt="Nome do Usuário"
            src="https://via.placeholder.com/40"
            sx={{ width: 40, height: 40 }}
          />
          <Typography sx={{ marginLeft: 2, fontWeight: "bold" }}>
            Murilo Melo
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
