import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';

function Post({ title, content }) {
  const [likes, setLikes] = useState(0);
  const [retweets, setRetweets] = useState(0);

  // Função para lidar com o clique no botão de like
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Função para lidar com o clique no botão de retweet
  const handleRetweet = () => {
    setRetweets(retweets + 1);
  };

  return (
    <Card sx={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleLike} color="error">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {likes}
        </Typography>
        <IconButton onClick={handleRetweet} color="primary">
          <RepeatIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {retweets}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default Post;
