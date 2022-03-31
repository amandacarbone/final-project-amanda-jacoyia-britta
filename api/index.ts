import express from "express";
import cors from "cors";
import pg from 'pg-promise';

const app = express();

const port = 3005;

export const db = pg()({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '',
    database: ''
});

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Server is listening on port ${port}.`));