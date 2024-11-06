import React, { useState } from 'react';

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

 function Cadastro(){

  const [formValue, setFormValue] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formValue);

  };

  return (
    <Box sx={{ height: '100vh',           
      backgroundImage: 'linear-gradient(to left, #4a148c, #9b59b6)',
      display: 'flex' }}>
   <Box 
        sx={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' ,

          
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
        
        }}
      >
        <Stack spacing={2} sx={{ width: '60%' }}>
        <Typography variant="h4" align="center" style={{ marginBottom: '30px' }}>Cadastro</Typography>
        <form onSubmit={handleSubmit} autoComplete='off' style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField style={{ marginTop: '15px' }}
            label="Nome" 
            variant="outlined" 
            fullWidth
            autoComplete='off'
            value={formValue.name} 
            onChange={(e) => setFormValue(prevState => ({ ...prevState, name: e.target.value }))} 
            required
          />
          <TextField style={{ marginTop: '15px' }}
            label="Email" 
            variant="outlined"
            type='email'
            fullWidth
            autoComplete='off'
            value={formValue.email} 
            onChange={(e) => setFormValue(prevState => ({ ...prevState, email: e.target.value }))} 
            required
          />
          
          <TextField style={{ marginTop: '15px' }}
            label="Usuário" 
            variant="outlined"
            fullWidth
            autoComplete='off'
            value={formValue.user} 
            onChange={(e) => setFormValue(prevState => ({ ...prevState, user: e.target.value }))} 
            required
          />
          
          <TextField style={{ marginTop: '15px' }}
              label="Senha" 
              variant="outlined" 
              type="password" 
              fullWidth 
              value={formValue.password} 
              onChange={(e) => setFormValue(prevState => ({ ...prevState, password: e.target.value }))} 
              required
          />
          <TextField style={{ marginTop: '15px' }}
              label="Repita a senha" 
              variant="outlined" 
              type="password" 
              fullWidth 
              value={formValue.passwordConfirm} 
              onChange={(e) => setFormValue(prevState => ({ ...prevState, passwordConfirm: e.target.value }))} 
              required
          />

          <Button variant="contained" color="primary" style={{ marginTop: '20px' }} type="submit">
            Criar
          </Button>
        </form>
        </Stack>
      </Box>

        </Box>
  );
}

export default Cadastro;