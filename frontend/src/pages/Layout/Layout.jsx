import React from 'react';
import { CssBaseline, Typography, Box, Toolbar, Container } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

const drawerWidth = 240;

function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Sidebar />

      {/* Conteúdo principal centralizado */}
      <Box component="main" sx={{ flexGrow: 1, ml: `${drawerWidth}px` }}>
        <Toolbar />
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Home
          </Typography>
          {/* Conteúdo principal */}
          <Typography variant="body1" color="text.secondary">
            Aqui vai o conteúdo principal da página, como o feed de postagens ou tweets.
          </Typography>
        </Container>
      </Box>
      <Navbar />

    </Box>
  );
}

export default Layout;
