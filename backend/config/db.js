import mongoose from "mongoose";
 
export const connectDB = async()=>{
    await mongoose.connect('mongodb://Shaxzod:Shaxzod2010@ac-okppo20-shard-00-00.x8ngthf.mongodb.net:27017,ac-okppo20-shard-00-01.x8ngthf.mongodb.net:27017,ac-okppo20-shard-00-02.x8ngthf.mongodb.net:27017/?ssl=true&replicaSet=atlas-ncvm3h-shard-0&authSource=admin&appName=Cluster0').then(()=>console.log("DB Connected"));
}