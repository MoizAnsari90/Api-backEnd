import express from 'express';
import { PostData } from '../AllPath/Posts.js';


export const postRoute = express.Router();

postRoute.get('/',(req,res)=>{
    res.status(200).send({status : 'post_Data' , message : 'success' , data : PostData })
})