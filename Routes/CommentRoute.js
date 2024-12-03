
import express from 'express';
import { commentData } from '../AllPath/Comments.js';

export const commentRoute = express.Router();


commentRoute.get('/' , (req,res)=>{
    res.status(200).send({ status : 'Comment_Data' , message : 'success' , data : commentData})
})
