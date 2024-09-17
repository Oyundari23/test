import express from "express";
import { connect } from "./configs/mongodb";
// import { userRouter } from "./router/UserRouter";
import { CommentModel, UserModel } from "./model/UserModel";

const app = express();
const port = 3001;

connect();

app.use(express.json());
// app.use(userRouter);

app.get("/", (req, res) => {
  res.send([{ name: "hello" }]);
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();

    res.send(users);
  } catch (error) {
    res.status(400).json({ errorMessage: "Error happened" });
  }
});

app.get("/users1", async (req, res) => {
  try {
    const users = await UserModel.findByIdAndDelete({
      _id: "59b99db4cfa9a34dcd7885b6",
    });

    res.send(users);
  } catch (error) {
    res.status(400).json({ errorMessage: "Error happened" });
  }
});

app.get("/users2", async (req, res) => {
  try {
    const users = await UserModel.create({
      name: "dari",
    });

    res.send(users);
  } catch (error) {
    res.status(400).json({ errorMessage: "Error happened" });
  }
});

app.get("/users3", async (req, res) => {
  try {
    const users = await UserModel.updateOne({
      _id: "59b99db4cfa9a34dcd7885b7",
      name: "dari",
      email: "hhh@hmail.com",
      password: "hhh",
    });

    res.send(users);
  } catch (error) {
    res.status(400).json({ errorMessage: "Error happened" });
  }
});


// comment

app.get("/comment", async (req, res) => {
  try {
    const users = await CommentModel.find();

    res.send(users);
  } catch (error) {
    res.status(400).json({ errorMessage: "Error happened" });
  }
});

app.get("/comments1", async (req, res) => {
  try {
    const users = await CommentModel.findByIdAndDelete(
      {_id: "5a9427648b0beebeb69579e7"}
    );

    res.send(comments);
  } catch (error) {
    res.status(400).json({ errorMessage: "Error happened" });
  }
});
// const User = await UserModel.create({name: "naraa", email:"nar@gmail.com"});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
