require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')
const workoutsRoutes = require('./routers/workouts')


const app = express()
//MIDDLEWARE
app.use(express.json())
app.use((req, res, next) => {
   console.log(req.path, req.method)
   next()
})

//app.get('/', (req, res) => {
//res.json({mssg: ' Welcome to the app'})
//})

app.use('/api/workouts', workoutsRoutes)

//connect todb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to database and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
    



//process.env













//MMONGO_URI=mongodb+srv://francejosephcabral:Francejoseph12@mernapp.eq4oj.mongodb.net/?retryWrites=true&w=majority&appName=MERNapp
