let usermongo = 'teste-api'
let passmongo = '69786856634546576'

export const environment = {
    server: {
        port: process.env.SERVER_PORT || 3000
    },
    db: {
        url: process.env.DB_URL || 'mongodb://localhost/meat-api'
        //url: process.env.DB_URL || 'mongodb://${usermongo}:${passmongo}@meatcluster-00000.mongodb.net/test?retryWrites=true&w=majority'
    },
    security: {
        saltRounds: process.env.SALT_ROUND || 10,
        apiSecret: process.env.API_SECRET || '3443546587697867564635'
    }
}



//f8aefd40-4108-44d0-bbdc-9804cf7c11ccrs