const express =require('express');
const app =express();
const env=require('dotenv');
const bodyParser= require('body-parser');
const mongoose =require('mongoose');

//enviornment config
env.config();
//mongoDB connect
//mongodb+srv://afivmd78:<password>@cluster0.edbzs.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.edbzs.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,  
    {
        useNewYrlParser:true,
        useUnidfiedTopology:true
    }
    ).then(()=>{
        console.log('Database connected')
    });
app.use(bodyParser());                        

app.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Hello from server"
    })
})

app.post('/data',(req,res,next)=>{
    res.status(200).json({
        message:req.body
    })                                      
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running in ${process.env.PORT}`)
})