import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Collapse,
  Divider,
  IconButton,
  Icon,
  Avatar,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ReportIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupIcon from "@mui/icons-material/Group";
import MenuIcon from "@mui/icons-material/Menu";
import { purple } from "@mui/material/colors";

import styles from "./Sidebar.styles";

const drawerWidth = 250;

export default function Sidebar({ open }) {
  const navigate = useNavigate();
  const [openCadastros, setOpenCadastros] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const toggleCadastros = () => {
    setOpenCadastros(!openCadastros);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? drawerWidth : 80,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 80,
          transition: "width 0.3s ease-in-out",
          overflowX: "hidden",
          minWidth: 0,
        },
      }}
    >
      <Toolbar />

      <Box sx={{ overflowY: "auto", overflowX: "hidden", flexGrow: 1 }}>
        <List>
          {/* Dashboard */}
          <ListItemButton
            sx={styles.listItemButtonSubStyle}
            onClick={() => handleNavigate("/dashboard")}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Dashboard" />}
          </ListItemButton>

          {/* Gerenciamento */}
          <ListItemButton
            sx={styles.listItemButtonSubStyle}
            onClick={() => handleNavigate("/gerenciamento")}
          >
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Gerenciamento" />}
          </ListItemButton>

          {/* Cadastros com submenu */}
          <ListItemButton
            sx={styles.listItemButtonSubStyle}
            onClick={toggleCadastros}
            title="Cadastros"
          >
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Cadastros" />}
            {openCadastros ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openCadastros} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={styles.sublistItemButtonSubStyle}
                onClick={() => handleNavigate("/produtos")}
                title="Produtos"
              >
                <ListItemIcon>
                  <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary="Produtos" />
              </ListItemButton>
              <ListItemButton
                sx={styles.sublistItemButtonSubStyle}
                onClick={() => handleNavigate("/clientes")}
              >
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Clientes" />
              </ListItemButton>
            </List>
            <Divider sx={{ my: 1 }} />
          </Collapse>

          {/* Relatórios */}
          <ListItemButton
            sx={styles.listItemButtonSubStyle}
            onClick={() => handleNavigate("/relatorios")}
          >
            <ListItemIcon>
              <ReportIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Relatórios" />}
          </ListItemButton>

          {/* Perfil */}
          <ListItemButton
            sx={styles.listItemButtonSubStyle}
            onClick={() => handleNavigate("/perfil")}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Perfil" />}
          </ListItemButton>

          {/* Configurações */}
          <ListItemButton
            sx={styles.listItemButtonSubStyle}
            onClick={() => handleNavigate("/configuracoes")}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Configurações" />}
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}
