import React, { useState } from 'react';

import Inicial from './pages/Inicial/Inicial';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';

import { ThemeProvider, createTheme, CssBaseline, IconButton } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { deepPurple, lightBlue } from '@mui/material/colors';
import { Brightness4, Brightness7 } from '@mui/icons-material';

import Layout from './pages/Layout/Layout';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';

const darkThemeMode = createTheme(darkTheme);
const lightThemeMode = createTheme(lightTheme);


function App() {

  const [isDarkMode, setIsDarkMode] = useState(true); 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
<ThemeProvider theme={isDarkMode ? darkThemeMode : lightThemeMode}> 
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Layout />} />

          </Routes>
          <IconButton 
              onClick={toggleTheme} 
              color="inherit" 
              style={{ position: 'fixed', top: '20px', right: '20px' }}
            >
          {isDarkMode ? <Brightness7 /> : <Brightness4 />}  {/* Exibe o ícone conforme o tema atual */}
        </IconButton>
      </Router>
    </ThemeProvider>
  );
}

export default App;
