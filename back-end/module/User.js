const mongoose=require("mongoose")
const Schema = mongoose.Schema
const userSchema = new Schema({
    fullName:String,
    email:String,
    password:String,
    age:Number
})
module.exports= mongoose.model("User",userSchema)