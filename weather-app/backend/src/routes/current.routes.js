const express = require("express");
const { currentMapper } = require("../controllers/current.controller");
const app = express.Router()

app.post("/", async (req, res) => {
    // console.log(req.headers.token)
    try{
    //    console.log(req.body);
       let data = await currentMapper(req.body);
       res.send(data)
    }catch (er) {
        console.log(er.message)
        res.status(500).send(er.message)
    } 

})

module.exports = app;