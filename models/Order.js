const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    products : [{
        productId: {type: String},
        quantity: {type: Number,default:1},
        size:{type:String},
        color:{type:String},
        img:{type:String}
    }],
    address: {type:String,required:true},
    email: {type:String,required:true},
    name:{type:String,required:true},
    phone:{type:Number,required:true},
    pincode:{type:Number,required:true},
    amount: {type:Number,required:true},
    status:{type:String,default:"Pending",required:true},
    paymentinfo:{
        payid:{type:String},
        orderid:{type:String},
        date:{type:Date}
    }
},{timestamps:true});
mongoose.models={}

export default mongoose.model("Order",OrderSchema);