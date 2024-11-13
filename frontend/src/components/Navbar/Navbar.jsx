import {
  Bookmark,
  Home,
  Mail,
  Notifications,
  Search,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
} from "@mui/material";

function Navbar() {
  const drawerWidth = 400;

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem>
            <TextField
              type="search"
              // label="Pesquisar"
              placeholder="Pesquisar"
              variant="outlined"
              fullWidth
              autoComplete="off"
              value={""}
              // onChange={(e) => setFormValue(prevState => ({ ...prevState, name: e.target.value }))}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                style: { borderRadius: "20px" }, // Define o arredondamento aqui
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default Navbar;
