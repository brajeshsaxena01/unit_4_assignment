const express=require("express")

const userController=require("./controllers/user.controller")
const batchController=require("./controllers/batch.controller")
const submissionController=require("./controllers/submission.controller")
const evaluationController=require("./controllers/evaluation.controller")
const studentController=require("./controllers/student.controller")

const app=express()

app.use(express.json())
app.use("/users",userController)
app.use("/students",studentController)
app.use("/evaluations",evaluationController)
app.use("/batch",batchController)
app.use("/submissions",submissionController)



module.exports=app;

app.listen(5000,async()=>{
    try {
        await connect();
    } catch (err) {
        console.log(err)
    }
    console.log("Listening on port 5000")
})