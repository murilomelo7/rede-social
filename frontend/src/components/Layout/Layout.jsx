import React, { useState } from "react";
import { CssBaseline, Box, Container } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          padding: 0,
          margin: 0,
          paddingTop: 0,
          marginTop: 0,
          display: "flex",
          width: "100%",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "#121212",
            minHeight: "100vh",
            width: "100%",
          }}
        >
          {children}
        </Container>
      </Box>
      <Navbar />
    </Box>
  );
}

export default Layout;
