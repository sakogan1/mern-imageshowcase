const Picture = require('../models/dbItem')

const api_index_get = (req, res) => {
    Picture.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
}
const api_index_post = (req, res) => {
    // console.log(req.body)
    const picture = new Picture(req.body)
    picture.save()
        .then(result => res.json(result))
        .catch(err => console.log(err))
}
const api_detail_get = (req, res) => {
    // console.log(req.params.id)
    Picture.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json({ message: "Something is missing.Please try again" }))
}
const api_detail_put = (req, res) => {
    Picture.findByIdAndUpdate(req.params.id, req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
}
const api_detail_delete = (req, res) => {
    Picture.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
}


module.exports = { api_index_get, api_index_post, api_detail_get, api_detail_put, api_detail_delete }
