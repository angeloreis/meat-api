"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let usermongo = 'angeloreis';
let passmongo = 'Qh8NmQmofVCZGLv5';
exports.environment = {
    server: {
        port: process.env.SERVER_PORT || 3000
    },
    db: {
        url: process.env.DB_URL || 'mongodb://localhost/meat-api'
        //url: process.env.DB_URL || 'mongodb://${usermongo}:${passmongo}@meatcluster-0zw8d.mongodb.net/test?retryWrites=true&w=majority'
    },
    security: {
        saltRounds: process.env.SALT_ROUND || 10,
        apiSecret: process.env.API_SECRET || '12qw!@QWasr50l1d5n4k3'
    }
};
//f8aefd40-4108-44d0-bbdc-9804cf7c11ccrs
