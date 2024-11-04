import React, { useState } from 'react';
import { Box, Button, Stack, Typography, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação

    // Exemplo de redirecionamento após o login bem-sucedido
    if (username && password) {
      console.log('Usuário:', username);
      console.log('Senha:', password);
      navigate('/home'); // Altere para a rota desejada após o login
    }
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex' }}>
      <Box 
        sx={{ 
          flex: 1, 
          backgroundColor: 'background.default', // Altera a cor de fundo para corresponder ao tema
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
      >
        <Stack spacing={2} sx={{ width: '30%' }}>
          <Box 
            sx={{ 
              border: '1px solid', // Adiciona uma borda
              borderColor: 'grey.400', // Define a cor da borda
              borderRadius: '16px', // Define a borda arredondada
              padding: '20px', // Adiciona preenchimento ao redor do conteúdo
              boxShadow: 2 // Adiciona sombra para dar um efeito de profundidade
            }}
          >
            <Typography variant="h4" align="center" style={{ marginBottom: '30px' }}>Login</Typography>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <TextField 
                label="Usuário" 
                variant="outlined" 
                fullWidth 
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
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Login;
