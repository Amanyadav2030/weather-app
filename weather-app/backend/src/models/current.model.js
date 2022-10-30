const mongoose = require('mongoose');

const CurrentSchema = mongoose.Schema({
    name:{require:true,type:String},
    region:{require:true,type:String},
    country:{require:true,type:String},
    lat:{require:true,type:String},
    lon:{require:true,type:String},
    tz_id:{require:true,type:String},
    localtime:{require:true,type:String}
});
const Current = mongoose.model('current',CurrentSchema);
module.exports = Current;