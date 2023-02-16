import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()





const app = express()
app.use(cors())
app.use(express.json())

const port =process.env.PORT || 30000

app.use('/',(req,res)=>{
    res.send('Memories app')
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})