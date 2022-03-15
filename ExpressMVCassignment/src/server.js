const app=require("./index.js")

const connect =require("./configs/db")

app.listen(5000,async()=>{
    try {
        await connect();
    } catch (err) {
        console.log(err)
    }
    console.log("Listening on port 5000")
})
