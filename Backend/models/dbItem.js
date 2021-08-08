const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gallerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    Author: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    authorImageUrl: {
        type: String,
        required: false
    },
    rating: Number
}, 

{ timestamps: true })

const Picture = mongoose.model('mern', gallerySchema)

module.exports = Picture