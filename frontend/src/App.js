import React from 'react';
import Inicial from './pages/Inicial/Inicial';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Configuração do tema em modo escuro
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    main: '#ff5252',

  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* CssBaseline aplica o fundo escuro e configurações globais */}
      <CssBaseline />
      <Inicial />
    </ThemeProvider>
  );
}

export default App;
