
import * as actionTypes from './AdvertiseActionType';


export const fetchAdvertiseStart= ()=>{

    return {
        type:actionTypes.FetchAdvertiseStart
    }
}


export const fetchAdvertiseEnd=()=>{

    return {
        type:actionTypes.FetchAdvertiseEnd
    }
}

export const fetchAdvertise=(data)=>{

    return {
        type:actionTypes.FetchAdvertise,
        data:data
    }
}

export const changeCategoryId =(selectedCategoryId)=>{
    return{
        type: actionTypes.changeCategoryId,
        data:selectedCategoryId
    }
}

