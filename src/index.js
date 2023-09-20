const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use('/api', userRoutes);

// routes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

// mongodb connection

const MONGODB_URI = 'mongodb+srv://agustinescuderoweb:AgustinAtlas.7@cluster0.xgvlfhl.mongodb.net/miprimerbasededatos?retryWrites=true&w=majority'

mongoose
  .connect(MONGODB_URI,  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connect mongodb Atlas"))
  .catch((error) => console.error(error));
 



app.listen(port, () => console.log('server listening on port', port));




