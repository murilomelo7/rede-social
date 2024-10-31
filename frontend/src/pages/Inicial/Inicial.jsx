import React from 'react'
import Input from '@mui/material/Input/Input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';


function Inicial () {
  return (
    <Box sx={{ height: '100vh', display: 'flex' }}>
      {/* Lado esquerdo - Logo */}
      <Box 
        sx={{ 
          flex: 1, 
          backgroundColor: '#f5f5f5', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
      >
        <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
          Sua Logo
        </Typography>
      </Box>

      {/* Lado direito - Botões de Login e Cadastro */}
      <Box 
        sx={{ 
          flex: 1, 
          backgroundColor: '#ffffff', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
      >
        <Stack spacing={2} sx={{ width: '60%' }}>
          <Button variant="contained" color="primary">
            Login
          </Button>
          <Button variant="outlined" color="primary">
            Cadastrar
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Inicial;