import 'dotenv/config';
import express from "express";
import cors from 'cors';
import pg from 'pg-promise';
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

const port = 3005;

export const db = pg()({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: `${process.env.SECRET_KEY}`,
    database: 'finalproject'
});

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);
app.use('/', authRoutes);

app.listen(port, () => console.log(`Server is listening on port ${port}.`));