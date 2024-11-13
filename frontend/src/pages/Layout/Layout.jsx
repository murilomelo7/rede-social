import React, { useState } from "react";
import {
  CssBaseline,
  Typography,
  Box,
  Toolbar,
  Container,
} from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Feed from "../../components/Feed/Feed";
import NewPostForm from "../../components/NewPostForm/NewPostForm";
import Post from "../../components/Post/Post";

function Layout({ children }) {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]); // Adiciona a nova postagem ao início do array de postagens
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom style={{ marginTop: "10px" }}>
            Home
          </Typography>
          <Typography variant="h4" gutterBottom>
            <NewPostForm onPostSubmit={handleNewPost} />
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {posts.map((post, index) => (
              <Post key={index} title={post.title} content={post.content} />
            ))}
          </Typography>
        </Container>
      </Box>
      {children}
      <Navbar />
    </Box>
  );
}

export default Layout;
