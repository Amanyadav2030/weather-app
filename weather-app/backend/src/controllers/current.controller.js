const {Current} = require('../models');

const currentMapper = async ({name,region,country,lat,lon,tz_id,localtime})=>{

    return { 
        town:name,
        state:region,
        nation:country,
        latitude:lat,
        longitude:lon,
        TimeZone:tz_id,
        Time:localtime
    };
   
}
module.exports  = {currentMapper};