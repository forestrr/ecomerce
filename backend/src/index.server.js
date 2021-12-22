const express =require('express');
const app =express();
const env=require('dotenv');
const bodyParser= require('body-parser');
const mongoose =require('mongoose');

//routes
const userRoutes = require('./routes/user')

//enviornment config
env.config();
//mongoDB connect
//mongodb+srv://afivmd78:<password>@cluster0.edbzs.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.edbzs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    ).then(()=>{
        console.log('Database connected')
    });
app.use(bodyParser());  
app.use('/api',userRoutes);                      

 

app.listen(process.env.PORT,()=>{
    console.log(`server is running in ${process.env.PORT}`)
})