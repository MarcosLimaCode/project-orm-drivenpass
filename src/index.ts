import express, { json } from "express";
import dotenv from "dotenv";
import passRouter from "./routers/index.router";
import errorHandler from "./middleware/errorHandler.middleware";

dotenv.config();
const app = express();
app.use(json());

app.use(passRouter);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Funcionou!"));
