import express from 'express';
const app=express();
import product_Routes from './routes/product.routes.js';
import connectDB from './db/connect.db.js';


const port=process.env.PORT || 8000;

app.use("/api/products",product_Routes);

connectDB()
.then(
        app.listen(port,()=>{
            console.log("Server Listening on Port: ",port);
        })   
    ) 
.catch ((error)=> {
        console.error("Error occur: ",error);
        process.exit(1);
    })
