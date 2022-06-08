import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Anali:2030@alura.07ukobs.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
