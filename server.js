require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const app = express()
const path = require(`path`)

const Routes = require('./Backend/Routes/Routes')
app.use(express.static("./Frontend/build"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(result => {
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
    })
    .catch(err => console.log(err))

app.use('/api', Routes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
})