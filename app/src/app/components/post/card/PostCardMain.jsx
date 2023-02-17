import * as React from 'react';
import { 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Typography 
} from '@mui/material';

  function handleClick(e) {
    e.preventDefault();
    console.log('Le lien a été cliqué.');

  }

export default function PostCardMain({post}) {

  return (
    <Card sx={{ width: "100%", display: "flex"}} onClick={handleClick}>
      <CardMedia
      component="div"
        sx={{ height: 140, width: "30%" }}
        image={'https://via.placeholder.com/150'}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {post.price}€ / {post.size} cm
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
