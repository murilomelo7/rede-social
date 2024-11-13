import {
  Bookmark,
  Gear,
  Home,
  Mail,
  Notifications,
  Search,
} from "@mui/icons-material";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleNavigate = (value) => {
    switch (value) {
      case "home":
        return navigate("/home");
      case "notifications":
        return navigate("/notifications");
      case "messages":
        navigate("/messages");
        break;
      case "saves":
        navigate("/saves");
        break;
      case "profile":
        navigate("/profile");
        break;
      case "configs":
        navigate("/configs");
        break;
      default:
        navigate("/home");
        break;
    }
  };

  const drawerWidth = 400;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItemButton onClick={() => handleNavigate("home")}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigate("notifications")}>
            <ListItemIcon>
              <Notifications />
            </ListItemIcon>
            <ListItemText primary="Notificações" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigate("messages")}>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="Mensagens" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigate("saves")}>
            <ListItemIcon>
              <Bookmark />
            </ListItemIcon>
            <ListItemText primary="Salvos" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigate("profile")}>
            <ListItemIcon>
              <Bookmark />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigate("configs")}>
            <ListItemIcon>{/* <Gear /> */}</ListItemIcon>
            <ListItemText primary="Configurações" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
