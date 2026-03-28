import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,"price must be provided"],
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        required:[true,"rating must be provided"],
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi"],
            message:`${values} is not supported`,
        },
    },
})

export default mongoose.model("Product",productSchema);