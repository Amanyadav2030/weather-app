const mongoose = require('mongoose');
const UrlSchema = mongoose.Schema({
    url:{require:true,type:String},
    key:{require:true,type:String},
    days:{type:String},
    q:{type:String,require:true},
    aqi:{type:String,default:"no"}
});
const Url = mongoose.model('url',UrlSchema);
module.exports = Url; 