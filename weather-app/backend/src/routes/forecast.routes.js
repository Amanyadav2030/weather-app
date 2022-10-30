const express = require('express');
const { forecastMapper } = require('../controllers/forecast.controller');
const app = express.Router();
const {Forecast} = require('../models/')
app.post("/",async(req,res)=>{
    try{
        let data = await forecastMapper(req.body);
        res.send(data);
    }catch(e){
        res.status(501).send({error:e.message})
    }
});

module.exports = app;