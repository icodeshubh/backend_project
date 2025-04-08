import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';


const connectDB = async ()=>{
    try {
        const conectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB Host : ${conectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection FAILED",error)
        process.exit(1)
        
    }
}

export default connectDB