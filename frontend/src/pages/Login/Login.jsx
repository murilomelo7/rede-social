import React from 'react'
import Input from '@mui/material/Input/Input';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Login () {
  return (
    <Box
    component={'form'}
    autoComplete="off"

    >
      <div style={{marginBottom: '15px'}}>
      <TextField
          required
          id="outlined-required"
          label="Usuário"
          defaultValue=""
          autoComplete='off'
        />
       

      </div>
      <div>
      {/* <TextField
          required
          id="outlined-required"
          label="Senha"
          type='password'
          defaultValue=""
          autoComplete='off'

        /> */}
      </div>
    </Box>
  )
}

export default Login;