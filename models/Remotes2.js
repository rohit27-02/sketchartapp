const mongoose = require('mongoose');

const Remotes2Schema = new mongoose.Schema({
    title : {type: String, required: true},
    slug : {type: String, required: true},
    features:{type:Array,required:true},
    poster:{type:String,required:true},
    price : {type: Number, required:true},
   
  
},{timestamps:true});
mongoose.models={}

export default mongoose.model("Remotes2",Remotes2Schema);