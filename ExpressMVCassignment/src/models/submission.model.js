const mongoose=require("mongoose")
const { stringify } = require("querystring")
const evaluationSchema=new mongoose.Schema(
    {
        marks:{type:string,required:true},
        evaluationId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"evaluation",
            required:true,
        },
        studentId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        }
    },
    {
        versionKey:false,
        timestamps:true,
    }
)
const Evaluation=mongoose.model("evaluation",userSchema)
module.exports=Evaluation;