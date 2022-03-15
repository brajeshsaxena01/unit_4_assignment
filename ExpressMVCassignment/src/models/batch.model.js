const mongoose=require("mongoose")
const { stringify } = require("querystring")
const batchSchema=new mongoose.Schema(
    {
        batchName:{type:string,required:true},
       
    },
    {
        versionKey:false,
        timestamps:true,
    }
)
const Batch=mongoose.model("batch",batchSchema)
module.exports=Batch;