const mongoose = require('mongoose')

const uri = `mongodb+srv://agustinescuderoweb:Agustinatlas.7@cluster0.xgvlfhl.mongodb.net/?retryWrites=true&w=majority`



module.exports = ()=> mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })