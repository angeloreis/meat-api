import * as mongoose from 'mongoose';

export interface MenuItem extends mongoose.Document{
    name: String,
    description: String,
    price: number
}

export interface Restaurant extends mongoose.Document{
    name: string,
    menu: MenuItem[]
}

const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength:60,
        minlength: 15
    },
    description:{
        type: String,
        required: false,
        minlength: 30,
        maxlength: 1200
    },
    price: {
        type: Number,
        required: true
    }
})

const restSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    menu: {
        type: [menuSchema],
        required: false,
        select: false,
        default: []
    }
})

export const Restaurant = mongoose.model<Restaurant>('Restaurant',restSchema)