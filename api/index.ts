import 'dotenv/config';
import express from "express";
import cors from 'cors';
import pg from 'pg-promise';
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

const port = 3005;

export const db = pg()({
<<<<<<< HEAD
    host: process.env.HOST,
    port: 5432,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
=======
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: process.env.SECRET_KEY,
    database: 'finalproject'
   
   
>>>>>>> 29ae466fb4d3982ea0dce98f063ae3ef21a3384c
});

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);
app.use('/', authRoutes);

app.listen(port, () => console.log(`Server is listening on port ${port}.`));