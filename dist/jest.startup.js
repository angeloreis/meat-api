"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jestCli = require("jest-cli");
const environment_1 = require("./commons/environment");
const server_1 = require("./server/server");
const users_router_1 = require("./router/users.router");
const users_model_1 = require("./model/users.model");
const reviews_router_1 = require("./router/reviews.router");
const reviews_model_1 = require("./model/reviews.model");
let server;
const beforeAllTests = () => {
    environment_1.environment.db.url = process.env.DB_URL || 'mongodb://localhost/meat-api-test-db';
    environment_1.environment.server.port = process.env.SERVER_PORT || 3001;
    server = new server_1.Server();
    return server.bootstrap([users_router_1.usersRouter, reviews_router_1.reviewsRouter])
        .then(() => users_model_1.User.remove({}).exec())
        .then(() => reviews_model_1.Review.remove({}).exec());
};
const afterAllTests = () => {
    return server.shutdown();
};
beforeAllTests()
    .then(() => jestCli.run())
    .then(() => afterAllTests())
    .catch(console.error);
