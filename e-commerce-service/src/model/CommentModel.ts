import { Schema, model } from "mongoose";

const scheme = new Schema ({
    name: String, 
    email: String, 
    movie_id: String, 
    text: String
  })
  
  export const CommentModel = model ("Comment", schema );