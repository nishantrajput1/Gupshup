import mongoose from "mongoose";
export async function connectDB(){
    try{
        const mongoURI = process.env.MONGODB_URI;
        if(!mongoURI){
            throw new Error("MONGO_URI is required");
        }
        const conn = await mongoose.connect(mongoURI);
        console.log("MONGODB Connected",conn.connection.host);
    }
    catch(err){
        console.log("MONGODB Connection Error : ",err.message);
        process.exit(1);
    }
}

