const express=require("express")
const Submission=require("../models/submission.model.js")
const router=express.Router();
router.get("/",async(req,res)=>{
    try {
        const submission=await Submission.find().lean().exec()
        return res.status(201).send({submission:submission})
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})
router.post("/",async(req,res)=>{
    try {
        const submission=await Submission.create(req.body)
        return res.status(201).send({submission:submission})
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const submission=await Submission.findById(req.params.id).lean().exec()
        return res.status(201).send({submission:submission})
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const submission=await Submission.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({submission:submission})
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        const submission=await Submission.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send({submission:submission})
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})
module.exports=router;
