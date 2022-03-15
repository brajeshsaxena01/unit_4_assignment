const mongoose=require("mongoose")
const { stringify } = require("querystring")
const studentSchema=new mongoose.Schema(
    {
        rollId:{type:string,required:true},
        currentBatch:{type:string,required:true},
    },
    {
        versionKey:false,
        timestamps:true,
    }
)
const Student=mongoose.model("student",studentSchema)
module.exports=Student;