import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {type:String,required:true},
    email : {type:String,required:true,unique:true},
    password : {type:String,required:true},
    image: {type:String,required:true},
    gender: {type:String,required:true},
    dob : {type:Number,reuired:true},
    phone : {type:Number,required:true},
    address : {type:String,default:{line1:'',line2:''}}
})

const userModel = mongoose.Model.user || mongoose.model('user',userSchema)

export default userModel