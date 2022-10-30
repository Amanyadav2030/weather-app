import { ADD_FORECAST_ERROR,ADD_FORECAST_LOADING,ADD_FORECAST_SUCCESS,GET_FORECAST_ERROR,GET_FORECAST_SUCCESS,GET_FORECAST_LOADING } from "./forecast.types";
const initialState = { 
    loading:false,
    error:false,
    data: {},
    mappedData:{}
};
export const forecastReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case GET_FORECAST_LOADING:{
          return  {
                ...state,
                loading:true,
                error:false
            }
        }
        case GET_FORECAST_ERROR:{
          return  {
                ...state,
                loading:false,
                error:true,
            }
        }
        case GET_FORECAST_SUCCESS:{
          return  {
                ...state,
                loading:false,
                error:false,
                data:payload
            }
        }
        case ADD_FORECAST_LOADING:{
          return  {
                ...state,
                loading:true,
                
            }
        }
        case ADD_FORECAST_LOADING:{
          return  {
                ...state,
                loading:true,
                error:false

            }
        }
        case ADD_FORECAST_ERROR:{
          return  {
                ...state,
                loading:false,
                error:true
            }
        }
        case ADD_FORECAST_SUCCESS:{
       console.log("Inside reducer",payload)
          return  {
                ...state,
                loading:false,
                error:false,
                mappedData:{
                    location: state.data.location,
                    current:state.data.current,
                    forecast:{
                        forecastday:[{
                            date:state.data.forecast.forecastday[0]['date'],
                            day:state.data.forecast.forecastday[0]['day'],
                            astro:payload,
                            hour:state.data.forecast.forecastday[0]['hour'],
                        }]
                    }
                }
            }
        }
        default: {
            return state
        }
    }
}