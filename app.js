require('dotenv').config();
const express = require('express');
require('express-async-errors')
const router = require('./routes/products')
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found')
const errorHandling = require('./middleware/error-handler')


const app = express()
const port = process.env.PORT || 5000;

// app.get('/',(req,res)=>{res.status(200).send('Hello world')})

app.use(express.json())
app.use('/api/v1',router)
app.use(notFound)
app.use(errorHandling)

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>console.log(`server is listening at port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()