import React from 'react';
import { Box, Container } from '@mui/material';
import Post from '../Post/Post';

function Feed() {
  // Array de postagens (pode ser substituído por dados reais de uma API)
  const posts = [
    { title: 'Postagem 1', content: 'Conteúdo da primeira postagem' },
    { title: 'Postagem 2', content: 'Conteúdo da segunda postagem' },
    { title: 'Postagem 3', content: 'Conteúdo da terceira postagem' },
  ];

  return (
    <Box sx={{ marginTop: '20px' }}>
      <Container maxWidth="md">
        {posts.map((post, index) => (
          <Post key={index} title={post.title} content={post.content} />
        ))}
      </Container>
    </Box>
  );
}

export default Feed;
