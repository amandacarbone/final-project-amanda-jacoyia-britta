import 'dotenv/config';
import express from "express";
import cors from 'cors';
import pg from 'pg-promise';
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

const port = 3005;

export const db = pg()({
    host: 'ec2-23-20-224-166.compute-1.amazonaws.com',
    port: 5432,
    user: 'pezqycbfmlpjxw',
    password: process.env.SECRET_KEY,
    database: 'd2349bs5thgj2n',
    ssl: {
        rejectUnauthorized: false
    }
});

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);
app.use('/', authRoutes);

app.listen(port, () => console.log(`Server is listening on port ${port}.`));