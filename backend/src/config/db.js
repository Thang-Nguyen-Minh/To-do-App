import mongoose from "mongoose";

export const connectDB= async (req,res)=> {
    try{
        await mongoose.connect(
            process.env.MONGODB_CONNECTIONSTRING,
        )
        console.log("Connected to DB successfully.")
    }
    catch(err){
        console.log("Error: "+err);
        process.exit(1);// exit with error
    }
}