import dotenv from 'dotenv';
import express from "express";
import cors from 'cors';
import pg from 'pg-promise';
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();

const port = process.env.PORT || 3005;

export const db = pg()({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);
app.use('/', authRoutes);

app.listen(port, () => console.log(`Server is listening on port ${port}.`));