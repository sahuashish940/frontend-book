import mongoose from "mongoose";

const connectDB = async() => {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/bookMyShow');
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
export default connectDB;