// Imported modules
const express = require('express')
require("dotenv").config
const app = express();
const mongoose = require('mongoose')
const route = require('../Crashdev/models/userModels') 
const errorHandler = require('./ErrorHandlers/errorHandler')
const PORT = 6000
const db = "mongodb+srv://kelechi:75DkiwNpksEKQNWI@kelechi.ricnkkk.mongodb.net/"
// const MONGODB_URI = process.env.MONGODB_URI




// DB connection
mongoose.set('strictQuery', false)

mongoose.connect(db)
  .then(() => console.log(`CrashDevDB connected successfully....`))
  .catch((err) => console.error("Error connecting to DB:", err));

  



// Middlewares
app.use(express.json());
app.use('/kel/opex/v1/', route)
app.use(errorHandler)



// Listening to App
app.listen(PORT, () => {
    console.log("Server is listening on port: " + PORT);
})

// // App export
// module.exports = app;
