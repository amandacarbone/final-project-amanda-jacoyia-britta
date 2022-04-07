import express from 'express';
import { db } from '../index';


const userRoutes = express.Router();



//delete route 
//get user by id route

userRoutes.get("/users", (req, res) => {
    db.many("select * from users")
        .then((data) => res.json(data))
        .catch((error) => console.log(error))
})

userRoutes.get("/users/:id", (req, res) => {
    db.oneOrNone('select * from users where id = $(id)', { id: req.params.id })
        .then(users => res.json(users))
})

userRoutes.delete("/users/:id", (req, res) => {

    db.oneOrNone('DELETE FROM users WHERE id = $(id)', { id: req.params.id })
        .then(users => res.json(users))
})






export default userRoutes;