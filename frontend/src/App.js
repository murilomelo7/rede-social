import React from 'react';

import Inicial from './pages/Inicial/Inicial';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { deepPurple, lightBlue } from '@mui/material/colors';

// Configuração do tema em modo escuro
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    palette: {
      primary: deepPurple,
      secondary: lightBlue,
    },
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    main: '#ff5252',

  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
