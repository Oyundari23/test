import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

export const connect = async () => {
  const MONGODB_URI = process.env.LI || "";
  try {
    await mongoose.connect("mongodb+srv://dariaa0560:GFaOLf3iF74creV0@e-commerce.s1z65.mongodb.net/sample_mflix");
    console.log("Connected to database successfully");
  } catch (error) {
    console.error(error);
  }
  return
};
