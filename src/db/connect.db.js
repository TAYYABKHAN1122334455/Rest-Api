import mongoose from "mongoose";
import env from 'dotenv';
env.config({
})
const connectDB=async()=>{
    try {
    await mongoose.connect(process.env.URI);
    console.log("Database Connected");   
} catch (error) {
    console.error("Error Occur in DB: ",error);
    process.exit(1);
}
}
export default connectDB;