const mongoose = require('mongoose');

const MotorSchema = new mongoose.Schema({
    title : {type: String, required: true},
    slug : {type: String, required: true, unique:true},
    category : {type: String,required:true},
    subcategory : {type: String},
    poster:{type:String,required:true},
    price : {type: Number, required:true},
    features:{type:Array,required:true},
    specs:{type:Array,required:true},
   
  
},{timestamps:true});
mongoose.models={}

export default mongoose.model("Motor",MotorSchema);