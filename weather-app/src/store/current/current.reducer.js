import { ADD_CURRENT_ERROR,ADD_CURRENT_LOADING,ADD_CURRENT_SUCCESS,GET_CURRENT_ERROR,GET_CURRENT_SUCCESS,GET_CURRENT_LOADING } from "./current.types";
const initialState = { 
    loading:false,
    error:false,
    data: {},
    mappedData:{} 
};
export const currentReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case GET_CURRENT_LOADING:{
          return  {
                ...state,
                loading:true,
                error:false
            }
        }
        case GET_CURRENT_ERROR:{
          return  {
                ...state,
                loading:false,
                error:true,
            }
        }
        case GET_CURRENT_SUCCESS:{
          return  {
                ...state,
                loading:false,
                error:false,
                data:payload
            }
        }
        case ADD_CURRENT_LOADING:{
          return  {
                ...state,
                loading:true,
                
            }
        }
        case ADD_CURRENT_ERROR:{
          return  {
                ...state,
                loading:false,
                error:true
            }
        }
        case ADD_CURRENT_SUCCESS:{
       
          return  {
                ...state,
                loading:false,
                error:false,
                mappedData:{location:payload,current:state.data.current}
            }
        }
        default: {
            return state
        }
    }
}