import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import postRoutes from'./routes/routes.js'
dotenv.config()





const app = express()
app.use(cors())
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))


app.use('/api', postRoutes)

const port =process.env.PORT || 30000

mongoose.connect(process.env.MONGO_URL ,{useNewUrlParser:true,useUnifiedTopology:true})
           .then(()=>{
            app.listen(port, ()=>{
                console.log(`server is running on port ${port}`);
            })
           })
           .catch((error)=>{
            console.log(error.message);

           })

           



