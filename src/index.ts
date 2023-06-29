import dotenv from "dotenv";
import express from "express";
import Routes from "./routes/index";

dotenv.config();
const app = express();

app.use(Routes)

const port: number = Number(process.env.PORT) || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));