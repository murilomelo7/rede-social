import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#3f51b5", // ou qualquer cor que você prefira
        height: "64px", // Defina uma altura fixa para o Navbar
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
            João Silva {/* Substitua pelo nome real do usuário */}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
