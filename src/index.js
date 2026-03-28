import express from 'express';
const app=express();
import product_Routes from './routes/product.routes.js';

const port=process.env.PORT || 8000;

app.use("/api/products",product_Routes);
const start=()=>{
    try {
        app.listen(port,()=>{
            console.log("Server Listening on Port: ",port);
        })    
    } catch (error) {
        console.log("Error occur: ",error);
        process.exit(0);
    }
}

start();