"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const users_model_1 = require("../model/users.model");
const restify_errors_1 = require("restify-errors");
const environment_1 = require("../commons/environment");
exports.authenticate = (req, resp, next) => {
    const { email, password } = req.body;
    users_model_1.User.findByEmail(email, '+password')
        .then(user => {
        if (user && user.matches(password)) {
            //gerar token
            const token = jwt.sign({ sub: user.email, iss: 'meat-api' }, environment_1.environment.security.apiSecret);
            resp.json({ name: user.name, email: user.email, acessToken: token });
            return next(false);
        }
        else {
            return next(new restify_errors_1.NotAuthorizedError('Invlaid Credentials'));
        }
    }).catch(next);
};
