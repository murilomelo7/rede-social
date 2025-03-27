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
} from "@mui/material";

import {
  Dashboard,
  AddBox,
  ManageAccounts,
  BarChart,
  Person,
  Settings,
  ExpandLess,
  ExpandMore,
  Inventory,
  Group,
  Category,
} from "@mui/icons-material";

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
          {/* <ListItemButton
            sx={styles.listItemButtonSubStyle}
            onClick={() => handleNavigate("/dashboard")}
          >
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            {open && <ListItemText primary="Dashboard" />}
          </ListItemButton> */}

          {/* Gerenciamento */}
          {/* <ListItemButton
            sx={styles.listItemButtonSubStyle}
            onClick={() => handleNavigate("/gerenciamento")}
          >
            <ListItemIcon>
              <ManageAccounts />
            </ListItemIcon>
            {open && <ListItemText primary="Gerenciamento" />}
          </ListItemButton> */}

          {/* Cadastros com submenu */}
          <ListItemButton
            sx={styles.listItemButtonSubStyle}
            onClick={toggleCadastros}
            title="Cadastros"
          >
            <ListItemIcon>
              <AddBox />
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
                  <Inventory />
                </ListItemIcon>
                {open && <ListItemText primary="Produtos" />}
              </ListItemButton>
              <ListItemButton
                sx={styles.sublistItemButtonSubStyle}
                onClick={() => handleNavigate("/categorias")}
              >
                <ListItemIcon>
                  <Category />
                </ListItemIcon>
                {open && <ListItemText primary="Categorias" />}
              </ListItemButton>
            </List>
            <Divider sx={{ my: 1 }} />
          </Collapse>

          {/* Relatórios
          <ListItemButton
            sx={styles.listItemButtonSubStyle}
            onClick={() => handleNavigate("/relatorios")}
          >
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            {open && <ListItemText primary="Relatórios" />}
          </ListItemButton> */}

          {/* Perfil
          <ListItemButton
            sx={styles.listItemButtonSubStyle}
            onClick={() => handleNavigate("/perfil")}
          >
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            {open && <ListItemText primary="Perfil" />}
          </ListItemButton> */}

          {/* Configurações
          <ListItemButton
            sx={styles.listItemButtonSubStyle}
            onClick={() => handleNavigate("/configuracoes")}
          >
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            {open && <ListItemText primary="Configurações" />}
          </ListItemButton> */}
        </List>
      </Box>
    </Drawer>
  );
}
