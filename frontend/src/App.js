import React, { useState } from "react";

import Inicial from "./pages/Inicial/Inicial";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
} from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";
import Profile from "./pages/Profile/Profile";
import ProdutoList from "./pages/Produto/ProdutoList";
import ProdutoForm from "./pages/Produto/ProdutoForm";
import CategoriaList from "./pages/Categoria/CategoriaList";
import CategoriaForm from "./pages/Categoria/CategoriaForm";

// Configuração do tema em modo escuro
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
          <Route path="/home" element={<Layout children={<Home />} />} />
          {/* <Route path="/profile" element={<Layout children={<Profile />} />} /> */}
          <Route
            path="/produtos"
            element={<Layout children={<ProdutoList />} />}
          />
          <Route
            path="/produtos/new"
            element={<Layout children={<ProdutoForm />} />}
          />
          <Route
            path="/categorias"
            element={<Layout children={<CategoriaList />} />}
          />
          <Route
            path="/categorias/new"
            element={<Layout children={<CategoriaForm />} />}
          />
        </Routes>
        {/* <IconButton
          onClick={toggleTheme}
          color="inherit"
          style={{ position: "fixed", top: "20px", right: "20px" }}
        >
          {isDarkMode ? <Brightness7 /> : <Brightness4 />}{" "}
        </IconButton> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
