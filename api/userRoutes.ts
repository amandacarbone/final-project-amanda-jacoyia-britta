import express from 'express'
import { db } from '../api/index'


const routes = express.Router();



//delete route 
//get user by id route

routes.get("/users", (req, res) => {
    db.many("select * from users")
        .then((data) => res.json(data))
        .catch((error) => console.log(error))
})

routes.get("/users/:id", (req, res) => {
    db.oneOrNone('select * from users where id = $(id)', { id: req.params.id })
        .then(users => res.json(users))
})

routes.delete("/users/:id", (req, res) => {

    db.oneOrNone('DELETE FROM users WHERE id = $(id)', { id: req.params.id })
        .then(users => res.json(users))
})






export default routes