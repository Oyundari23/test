import { UserModel } from "../model/UserModel";
import { Request, Response, request } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const SALT_SECRET = process.env.SALT_SECRET || "";

const register = async (req: Request, res: Response) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) return res.sendStatus(400);

    const hashedPassword = await bcrypt.hash(
      String(password),
      Number(SALT_SECRET)
    );

    // password bolon encrypt hiij bga salt secret iin TYPE iig zaaj uguh

    const user = await UserModel.create({
      email,
      password: hashedPassword, // if property's name and value are equal,
    });
    res.send(user);
  } catch (err) {
    console.error(err);

    res.sendStatus(401);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const {email, password}= req.body;
    const user = await UserModel.findOne({ email });  

    if (!user ) return res.status(401).send ("User does not exist ")  // 2 times res send ued RETURN check hiih 
      const isSame = await bcrypt.compare(String(password), user.password);   // user unen ued ene line iig shalgana, orno  
    if (isSame) {
      return res.send(user);
    }
    res.status(401).send ("Password is incorrect");
  } catch (err) {
    console.log(err)
    res.sendStatus(401);
  }
};

export { register, login };
