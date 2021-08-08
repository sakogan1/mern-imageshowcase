const express = require("express")
const router = express.Router()

const Picture = require('../models/dbItem')

router.get('/', (req, res) => {
    Picture.find()
    .then(result=>res.json(result))
    .catch((err)=>{console.log(err)})
})
router.post('/', (req, res) => {
    // console.log(req.body)
    const picture = new Picture(req.body)
    picture.save()
    .then(result => res.json({ redirect: "/picture" }))
        .catch(err => console.log(err))
})
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    Picture.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json({ message: "Something is missing.Please try again" }))
})
router.put('/:id', (req, res) => {
    Picture.findByIdAndUpdate(req.params.id, req.body)
        .then(result => res.json({ redirect: "/picture" }))
        .catch(err => res.json(err))
})
router.delete('/:id', (req, res) => {
    Picture.findByIdAndDelete(req.params.id)
        .then(result => res.json({ redirect: "/picture" }))
        .catch(err => res.json(err))
})

module.exports = router