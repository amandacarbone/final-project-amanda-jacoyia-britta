import 'dotenv/config';
import express from "express";
import cors from 'cors';
import pg from 'pg-promise';
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

const port = 3005;

export const db = pg()({
    host: 'ec2-52-54-212-232.compute-1.amazonaws.com',
    port: 5432,
    user: 'ulxojjsitockqx',
    password: '6ee1cf0811a753d5e091266697057f822b0f7d3cea06095cf5976d2f58c5c065',
    database: 'd727733s9ecqvu',
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