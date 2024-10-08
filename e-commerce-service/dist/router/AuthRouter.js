"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const AuthController_1 = require("../controller/AuthController");
const authRouter = express_1.default.Router();
exports.authRouter = authRouter;
authRouter
    .post("/register", AuthController_1.register)
    .post("/login", AuthController_1.login);
