"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const UserModel_1 = require("../model/UserModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const SALT_SECRET = process.env.SALT_SECRET || "";
const register = async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!email || !password)
            return res.sendStatus(400);
        const hashedPassword = await bcrypt_1.default.hash(String(password), Number(SALT_SECRET));
        // password bolon encrypt hiij bga salt secret iin TYPE iig zaaj uguh
        const user = await UserModel_1.UserModel.create({
            email,
            password: hashedPassword, // if property's name and value are equal,
        });
        res.send(user);
    }
    catch (err) {
        console.error(err);
        res.sendStatus(401);
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel_1.UserModel.findOne({ email });
        if (!user)
            return res.status(401).send("User does not exist "); // 2 times res send ued RETURN check hiih 
        const isSame = await bcrypt_1.default.compare(String(password), user.password); // user unen ued ene line iig shalgana, orno  
        if (isSame) {
            return res.send(user);
        }
        res.status(401).send("Password is incorrect");
    }
    catch (err) {
        console.log(err);
        res.sendStatus(401);
    }
};
exports.login = login;
