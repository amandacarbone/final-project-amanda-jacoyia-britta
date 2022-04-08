import express from "express";
import { db } from "../index";
import Joi from "joi";
import bcrypt from 'bcrypt';

const saltRounds = 10;

const authRoutes = express.Router();

const schema = Joi.object({
    first_name: Joi.string().min(1).max(500).required(),
    last_name: Joi.string().min(1).max(500).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'edu']} }).required(),
    password: Joi.string().required().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'))
});

authRoutes.post('/signup', (req, res) => {

    const valid = schema.validate(req.body);

    if(valid.error) {
        return res.status(400).send(valid.error);
    }

    const hash = bcrypt.hashSync(req.body.password, saltRounds);

    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hash
    }

    db.oneOrNone('SELECT id, email FROM users WHERE email = $(email)', { email: req.body.email })
    .then(user => {
        if(user) {
            return res.status(400).send("An account associated with this email already exists.")
        }

        db.one('INSERT INTO users (first_name, last_name, email, password) VALUES ($(first_name), $(last_name), $(email), $(password)) RETURNING id, first_name, last_name, email', newUser)
        .then(id => {
            return db.oneOrNone('SELECT id, first_name, last_name, email from users where id = $(id)', { id: id.id })
            .then(user => res.status(201).json(user))
            .catch(error => console.log(error))
        });
    });

});

authRoutes.post('/login', (req, res) => {
    
    const userLoginInput = {
        email: req.body.email,
        password: req.body.password
    }

    db.oneOrNone('SELECT id, email, password FROM users WHERE email = $(email)', { email: req.body.email })
    .then(user => {
        if(!user) {
            return res.status(400).send("Invalid email or password.")
        }

        console.log(user);
        if (!bcrypt.compareSync(userLoginInput.password, user.password)) {
            return res.status(400).send("Invalid email or password.")
        }
        res.json(user);
    });

});

export default authRoutes;