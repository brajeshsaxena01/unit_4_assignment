const express=require("express")
const Evaluation=require("../models/evaluation.model.js")
const router=express.Router();
router.get("/",async(req,res)=>{
    try {
        const evaluations=await Evaluation.find().lean().exec()
        return res.status(201).send({evaluations:evaluations})
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})
router.post("/",async(req,res)=>{
    try {
        const evaluation=await Evaluation.create(req.body)
        return res.status(201).send({evaluation:evaluation})
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const evaluation=await Evaluation.findById(req.params.id).lean().exec()
        return res.status(201).send({evaluation:evaluation})
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const evaluation=await Evaluation.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({evaluation:evaluation})
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        const evaluation=await Evaluation.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send({evaluation:evaluation})
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})
module.exports=router;
