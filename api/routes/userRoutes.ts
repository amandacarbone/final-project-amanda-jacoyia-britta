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

//endpoint to update user first name, last name, and email only
userRoutes.put("/users/update/:id", (req, res) => {
    db.many("select * from users")
      .then((user) => {
        let foundUser= user.find((u) => u.id === +req.params.id);
  
        if (!foundUser) {
          res.status(404).json({ error: "User account does not exist" });
        } else {
          db.none(
            "UPDATE users SET id=${id}, first_name=$(first_name), last_name = $(last_name), email = $(email), isvegetarian = $(isvegetarian), isvegan = $(isvegan), ispescatarian = $(ispescatarian) where id = ${id}",
            {
              id: +req.params.id,
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              email: req.body.email,
              isvegetarian: req.body.isvegetarian,
              isvegan: req.body.isvegan,
              ispescatarian: req.body.ispescatarian,
            }
          );
  
          res.send(req.body);
        }
      })
  
  });








export default userRoutes;