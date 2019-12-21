import * as actions from './AdvertiseAction'; 
import Axios from '../../Axios/Axios';

export const asyncFetchAdveritse =(selectedCategoryId)=>{

   return dispatch=>{
        dispatch(actions.fetchAdvertiseStart())
        Axios.get(`/advertise/?cat=${selectedCategoryId}`)
        .then(res=>{
            dispatch(actions.fetchAdvertise(res.data.results))
            dispatch(actions.fetchAdvertiseEnd())

        })
        .catch(er=>{
            dispatch(actions.fetchAdvertiseEnd())
        })
       
        
    }
}


export const categoryIdChanged =(selectedCategoryId)=>{
    return dispatch=>{
        dispatch(actions.changeCategoryId(selectedCategoryId))
    }
}