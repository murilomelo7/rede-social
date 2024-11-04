import React from 'react';
import Input from '@mui/material/Input/Input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Inicial() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  }

  const handleCadastroClick = () => {
    navigate('/cadastro');
  }

  return (
    <Box sx={{ height: '100vh', display: 'flex' }}>
      {/* Lado esquerdo - Logo */}
      <Box 
        sx={{ 
          flex: 1, 
          backgroundColor: 'background.default', // Usa a cor de fundo do tema
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
      >
        <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
         M
        </Typography>
      </Box>
      <Box 
        sx={{ 
          flex: 1, 
          backgroundColor: 'background.paper',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
      >
        <Stack spacing={2} sx={{ width: '60%' }}>
          <Button variant="contained" color="primary" onClick={handleLoginClick}>
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
