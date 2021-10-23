import React from "react";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Button from '@mui/material/Button/index';
import './books.css';

const Book = (props) => {
   return (
      <Card sx={{ maxWidth: 345 }}>
         <CardMedia
            component="img"
            height="140"
            width="500"
            image={props.volumeInfo.imageLinks ? props.volumeInfo.imageLinks.smallThumbnail : require("./../../assets/default-book.jpg").default}
            alt="loading..."
         /> 
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               {props.volumeInfo.title}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
               {props.volumeInfo.description}
            </Typography> */}
         </CardContent>
         <CardActions>
            <Button size="small"><a rel="noreferrer" target="_blank" href={props.volumeInfo.previewLink}>Learn More</a></Button>
         </CardActions>
      </Card>
   );
};

export default Book;
