import mongoose from 'mongoose';
const {Schema} = mongoose;
const Product = new Schema({
    name: { type: String, maxLenght: 10 },
    description: { type: String, maxLenght: 100 },
    price: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, 
});
export default mongoose.model('Product', Product);
