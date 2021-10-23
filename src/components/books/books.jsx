import { Container, Grid } from "@mui/material";
import React from "react";
import Book from "./book";
import MiniPreloader from './../MiniPreloader/MiniPreloader';

const Books = (props) => {
   return (
      <Container>
         <Grid container spacing={5}>
            {!props.isFetching ? props.items.map((item) => (
               <Grid item md={4} xs={8} key={item.id}>
                  <Book {...item} key={item.id} />
               </Grid>
            )) : <MiniPreloader />}
         </Grid>
      </Container>
   );
};

export default Books;
