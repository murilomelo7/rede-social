import React, { useState } from 'react';
import Input from '@mui/material/Input/Input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Inicial() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLoginClick = () => {
    navigate('/login');
  }

  const handleCadastroClick = () => {
    navigate('/cadastro');
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    if (username && password) {
      console.log('Usuário:', username);
      console.log('Senha:', password);
      navigate('/home');
    }
  };

  return (
    <Box sx={{ height: '100vh',
       
      display: 'flex' }}>
      <Box 
        sx={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' ,
          backgroundImage: 'linear-gradient(to left, #121212, #5f258e)',

          
        }}
      >
        <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
          M
        </Typography>
      </Box>
      <Box 
        sx={{ 
          flex: 0.8, 
          backgroundColor: 'background.paper',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          borderTopLeftRadius: '6px',
          borderBottomLeftRadius: '6px',
          // backgroundImage: 'linear-gradient(to left, #121212, #5f258e)',

        
        }}
      >
        <Stack spacing={2} sx={{ width: '60%' }}>
        <Typography variant="h4" align="center" style={{ marginBottom: '30px' }}>Login</Typography>

        <form onSubmit={handleSubmit} autoComplete='off' style={{ display: 'flex', flexDirection: 'column' }}>
              <TextField 
                label="Usuário" 
                variant="outlined" 
                fullWidth
                autoComplete='off'
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required
              />
              <TextField style={{ marginTop: '15px' }}
                label="Senha" 
                variant="outlined" 
                type="password" 
                fullWidth 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
              <Button variant="contained" color="primary" style={{ marginTop: '20px' }} type="submit">
                Entrar
              </Button>
            </form>
          <Button variant="outlined" color="primary" onClick={handleCadastroClick}>
            Cadastrar
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Inicial;
