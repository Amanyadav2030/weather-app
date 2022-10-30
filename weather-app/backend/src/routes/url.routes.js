const express = require('express');
const app = express.Router();
const {Url} = require('../models/');
app.get("/",async(req,res)=>{
    try{
        const urls = await Url.find();
        res.send(urls);
    }catch(e){
        res.send({error:e.message});
    }
})
app.post("/",async(req,res)=>{
    try{
        console.log(req.body);
        const url = new Url(req.body);
        await url.save();
        res.send(url)
    }catch(e){
        res.send({error:e.message});
    }
})
module.exports = app;