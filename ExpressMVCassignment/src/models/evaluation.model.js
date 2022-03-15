const mongoose=require("mongoose")
const { stringify } = require("querystring")
const evaluationSchema=new mongoose.Schema(
    {
        date_of_evaluation:{type:string,required:true},
        instructor:{type:string,required:true},
        batchId:{type:string,required:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        },
        batchId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"batch",
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