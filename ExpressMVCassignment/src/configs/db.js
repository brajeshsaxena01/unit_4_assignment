const mongoose=require("mongoose")
const connect=()=>{
    return mongoose.connect(
        "mongodb+srv://braj:braj_123@cluster0.ta7rm.mongodb.net/MVC?retryWrites=true&w=majority"
    )
}
module.exports=connect;