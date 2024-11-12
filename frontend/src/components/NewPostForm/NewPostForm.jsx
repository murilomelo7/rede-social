import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Stack } from '@mui/material';

// Componente de Formulário de Nova Postagem
function NewPostForm({ onPostSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Chama o onPostSubmit passando a nova postagem
    onPostSubmit({ title, content });

    // Limpa os campos do formulário após o envio
    setTitle('');
    setContent('');
  };

  return (
    <Box sx={{ marginBottom: '20px', backgroundColor: 'background.paper', borderRadius: '8px' }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            placeholder='O que está pensando?'
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Postar
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default NewPostForm;
