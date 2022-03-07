const express=require('express')
const app=express()
app.get("/users",(req,res)=>{
    console.log("getting request")
})