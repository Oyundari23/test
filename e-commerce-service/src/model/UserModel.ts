import { model, Schema } from "mongoose";

const schema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
  phoneNumber: String,
});

export const UserModel = model("user", schema);    //"user" heseg ni MONGODB der automatically uusgeh ner ni "users" bolno
