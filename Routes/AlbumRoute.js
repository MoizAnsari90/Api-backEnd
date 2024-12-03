
import express from 'express';
import { AlbumsData } from '../AllPath/Albums.js';



export const AlbumRouter = express.Router()

AlbumRouter.get('/' , (req,res)=>{
    res.status(200).send({ status : 'Album_Data' , message : 'success' , data : AlbumsData })
})