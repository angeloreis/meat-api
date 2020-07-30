import {Server} from './server/server'
import { usersRouter } from './router/users.router'
import { restaurantsRouter } from './router/restaurants.router'
import { reviewsRouter } from './router/reviews.router';

const server = new Server()
server.bootstrap([
        usersRouter,
        restaurantsRouter,
        reviewsRouter
      ])
      .then(server=>{
            console.log('Server is listening on:',server.application.address())
    }).catch(error=>{
            console.log('Server failed to start')
            console.error(error)
            process.exit(1)
    })