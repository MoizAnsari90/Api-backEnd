import express from 'express';
// import dotenv from 'dotenv';
import { postRoute } from './Routes/postRouter.js';
import { commentRoute } from './Routes/CommentRoute.js';
import { AlbumRouter } from './Routes/AlbumRoute.js';
const app = express();
// dotenv.config();


app.use('/post' , postRoute );
app.use('/comment' , commentRoute);
app.use('/album' , AlbumRouter);



// const Port = process.env.Port;


const Port = 8000;

app.listen(Port, ()=>{
    console.log(`Wel Come To Server ${Port}`);
})