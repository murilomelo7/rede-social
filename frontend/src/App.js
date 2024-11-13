import React, { useState } from "react";

import Inicial from "./pages/Inicial/Inicial";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { deepPurple, lightBlue } from "@mui/material/colors";
import Layout from "./pages/Layout/Layout";

// Configuração do tema em modo escuro
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    palette: {
      primary: deepPurple,
      secondary: lightBlue,
    },
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
    main: "#ff5252",
  },
});

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
          <Route path="/home" element={<Layout children={<Home />} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
