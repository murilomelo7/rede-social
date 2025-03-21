import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function CustomNavbar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '60px',
        backgroundColor: '#1976d2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3, // padding horizontal
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      {/* Logo ou Título */}
      <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
        MinhaMarca
      </Typography>

      {/* Links de navegação */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button sx={{ color: '#fff', textTransform: 'none' }}>Início</Button>
        <Button sx={{ color: '#fff', textTransform: 'none' }}>Sobre</Button>
        <Button sx={{ color: '#fff', textTransform: 'none' }}>Serviços</Button>
        <Button
          variant="outlined"
          sx={{
            color: '#fff',
            borderColor: '#fff',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#fff',
              color: '#1976d2',
            },
          }}
        >
          Contato
        </Button>
      </Box>
    </Box>
  );
}
