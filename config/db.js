import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToMongo = async () => {
  try {
    const res = await mongoose.connect(process.env.mongo_uri);
    if (res) {
      console.log("connected successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
