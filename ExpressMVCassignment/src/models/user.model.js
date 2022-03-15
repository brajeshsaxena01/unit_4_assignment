const mongoose=require("mongoose")
const { stringify } = require("querystring")
const userSchema=new mongoose.Schema(
    {
        firstName:{type:string,required:true},
        lastName:{type:string,required:false},
        gender:{type:string,required:true},
        dateOfBirth:{type:string,required:true},
        type:{type:string,required:true},
    },
    {
        versionKey:false,
        timestamps:true,
    }
)
const User=mongoose.model("user",userSchema)
module.exports=User;