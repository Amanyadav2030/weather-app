import { ADD_FORECAST_ERROR,ADD_FORECAST_LOADING,ADD_FORECAST_SUCCESS,GET_FORECAST_ERROR,GET_FORECAST_SUCCESS,GET_FORECAST_LOADING } from "./forecast.types";
import axios from "axios";

export const getForecastDataApi=(place,day)=>async (dispatch)=>{
    dispatch({type:GET_FORECAST_LOADING});
    try{
        //for getting api data
        const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=06a0d6e010d242b4816152843222810&q=${place}&days=${day}&aqi=no&alerts=no`)
        // console.log(res.data,"Inside actions")
        axios.post('http://localhost:8080/url',{
            url:"http://api.weatherapi.com/v1/current.json",
            key:"06a0d6e010d242b4816152843222810",
            q:place,
            days:day,
            label:"Forecast",
        })
        dispatch(forecastApiMapper(res.data.forecast.forecastday[0]['astro']))
        dispatch({type:GET_FORECAST_SUCCESS,payload:res.data});
    }catch(e){
        dispatch({type:GET_FORECAST_ERROR});
        console.log(e.message);
    }
};
export const forecastApiMapper=(astro)=>async (dispatch)=>{
    dispatch({type:ADD_FORECAST_LOADING});
    try{
        //for getting api data
        const res = await axios.post(`http://localhost:8080/forecast`,astro)
        // console.log("Inside action data",res.data);
        dispatch({type:ADD_FORECAST_SUCCESS,payload:res.data});

    }catch(e){
        dispatch({type:ADD_FORECAST_ERROR});
        console.log(e.message);
    }
}