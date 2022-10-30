const {Forecast} = require('../models');
const forecastMapper = async ({sunrise,sunset,moonrise,moonset,moon_phase,moon_illumination})=>{
    return{
        Dawn:sunrise,
        Dusk:sunset,
        moonlit:moonrise,
        moonsleep:moonset,
        orientation:moon_phase,
        Illumination:moon_illumination        
    };
}
module.exports  = {forecastMapper};
