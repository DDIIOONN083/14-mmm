/**
 * @Author: Your name
 * @Date:   2024-02-23 22:21:42
 * @Last Modified by:   Your name
 * @Last Modified time: 2024-02-24 15:48:10
 */
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users.route.js";
import studentRouter from "./routes/students.route.js";

const app = express();
const PORT = 3000;
//const DB_URL = "mongodb://localhost:27017/ecommerce";
const DB_URL = "mongodb+srv://CoderUser:1234@cluster0.mzglvv8.mongodb.net/";


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use("/users", userRouter);
app.use("/students", studentRouter);

const server = app.listen(PORT, () => {
  console.log("Servidor iniciado");
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => {
    console.log("Error en conexión a base de datos", error);
  });
