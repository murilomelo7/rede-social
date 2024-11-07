import { Bookmark, Gear , Home, Mail, Notifications, Search } from "@mui/icons-material";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";

function Sidebar (){
  const drawerWidth = 350;

  return (
    <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
  >
    <Toolbar />
    <Box sx={{ overflow: 'auto' }}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Notifications />
          </ListItemIcon>
          <ListItemText primary="Notificações" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="Mensagens" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Bookmark />
          </ListItemIcon>
          <ListItemText primary="Salvos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Bookmark />
          </ListItemIcon>
          <ListItemText primary="Perfil" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            {/* <Gear /> */}
          </ListItemIcon>
          <ListItemText primary="Configurações" />
        </ListItem>
      </List>
    </Box>
  </Drawer>
  );
}

export default Sidebar;