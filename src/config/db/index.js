import mongoose from "mongoose";
const connect = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/QTai_Store_Dev');
        console.log('successfully!!!');
    } catch (error) {
        console.log('failed to connect'); 
    }
}
export default {connect};