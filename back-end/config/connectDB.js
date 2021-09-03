const mongoose =require("mongoose")
const config = require("config")
const db = config.get("db")
const connectDB = async() => {
    try {
        await mongoose.connect(db)
        console.log("database connected successfully ...")
        
    } catch (error) {
        console.log(error)
        
    }
}
module.exports= connectDB;