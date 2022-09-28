const mongoose = require('mongoose');

const InfoSchema = new mongoose.Schema({
    address : {type: String, required: true},
    email : {type: String, required: true, unique:true},
   phone : {type: String,required:true},
    
},{timestamps:true});
mongoose.models={}

export default mongoose.model("Info",InfoSchema);