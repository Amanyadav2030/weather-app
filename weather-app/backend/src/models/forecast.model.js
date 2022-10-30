const mongoose = require('mongoose');

const ForeCastSchema = mongoose.Schema({
    sunrise:{require:true,type:String},
    sunset:{require:true,type:String},
    moonrise:{require:true,type:String},
    moonset:{require:true,type:String},
    moon_phase:{require:true,type:String},
    moon_illumination:{require:true,type:String}
});
const Forecast = mongoose.model('forecast',ForeCastSchema);
module.exports = Forecast;