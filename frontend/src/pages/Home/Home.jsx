import { Box, Button, IconButton, Typography } from "@mui/material";
import NewPostForm from "../../components/NewPostForm/NewPostForm";
import { useState } from "react";
import Post from "../../components/Post/Post";
import { Add, AddCircleOutline, PostAdd } from "@mui/icons-material";

function Home() {
  const [posts, setPosts] = useState([]);
  const [newPostFormIsOpen, setNewPostFormIsOpen] = useState(false);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]); // Adiciona a nova postagem ao início do array de postagens
  };

  const toggleNewPostForm = () => {
    setNewPostFormIsOpen((prev) => !prev); // Alterna o estado de visibilidade do formulário
  };

  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ marginTop: "10px" }}>
          Home
        </Typography>

        <IconButton
          color="primary"
          title={newPostFormIsOpen ? "Fechar" : "Novo post"}
          onClick={toggleNewPostForm}
          sx={{ marginLeft: "10px" }}
        >
          <PostAdd />
        </IconButton>
      </Box>

      {newPostFormIsOpen && (
        <Box sx={{ marginBottom: "20px" }}>
          <NewPostForm onPostSubmit={handleNewPost} />
        </Box>
      )}

      <Typography variant="body1" color="text.secondary">
        {posts.map((post, index) => (
          <Post key={index} title={post.title} content={post.content} />
        ))}
      </Typography>
    </Box>
  );
}

export default Home;
