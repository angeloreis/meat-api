import * as restify from 'restify'
import * as mongoose from 'mongoose'
import { ModelRouter } from '../commons/model-router'
import { Review } from '../model/reviews.model'

class ReviewsRouter extends ModelRouter<Review>{
    constructor(){
        super(Review)
    }

    envelope(document){
        let resource = super.envelope(document)
        const restId = document.restaurant._id ? document.restaurant._id : document.restaurant
        resource._links.restaurant = `/restaurants/${restId}`
        return resource
    }

    findById = (req,resp,next) => {
        this.model.findById(req.params.id)
                  .populate('user','name')
                  .populate('restaurant','name')
                  .then(this.render(resp,next))
                  .catch(next)
    }

    applyRoutes(application: restify.Server){
        application.get(`${this.basePath}`,this.findAll)
        application.get(`${this.basePath}/:id`, [this.validateId,this.findById])
        application.post(`${this.basePath}`, this.save)        
    }
}

export const reviewsRouter = new ReviewsRouter()



