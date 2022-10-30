import axios from "axios";
import { ADD_CURRENT_ERROR,ADD_CURRENT_LOADING,ADD_CURRENT_SUCCESS,GET_CURRENT_ERROR,GET_CURRENT_SUCCESS,GET_CURRENT_LOADING } from "./current.types";

export const getCurrentDataApi=(place)=>async (dispatch)=>{
    dispatch({type:GET_CURRENT_LOADING});
    try{
        //for getting api data
        const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=06a0d6e010d242b4816152843222810&q=${place}&aqi=no`)
        axios.post('http://localhost:8080/url',{
            url:"http://api.weatherapi.com/v1/current.json",
            key:"06a0d6e010d242b4816152843222810",
            q:place,
            label:"Current"
        })
        currentApiMapper(res.data.location);
        dispatch({type:GET_CURRENT_SUCCESS,payload:res.data});

    }catch(e){
        dispatch({type:GET_CURRENT_ERROR});
        console.log(e.message);
    }
}
export const currentApiMapper=(location)=>async (dispatch)=>{
    dispatch({type:ADD_CURRENT_LOADING});
    try{
        //for getting api data
        // console.log("Before api mapper sending",location);
        const res = await axios.post(`http://localhost:8080/current`,location)
        // console.log("Inside Api mapper data",res.data);
       return dispatch({type:ADD_CURRENT_SUCCESS,payload:res.data});

    }catch(e){
        dispatch({type:ADD_CURRENT_ERROR});
        console.log(e.message);
    }
}