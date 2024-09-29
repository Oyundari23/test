"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
const mongoose_1 = require("mongoose");
const scheme = new mongoose_1.Schema({
    name: String,
    email: String,
    movie_id: String,
    text: String
});
exports.CommentModel = (0, mongoose_1.model)("Comment", schema);
