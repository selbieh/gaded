
import * as actionTypes from './AdvertiseActionType';


export const fetchAdvertiseStart= ()=>{

    return {
        type:actionTypes.FetchAdvertiseStart
    }
}

export const uiStart = () =>{
    return {
        type:actionTypes.uiStart
    }
}

export const saveSubscribedCategories =(data)=>{
    return{
        type: actionTypes.SAVE_CAT_IDS,
        data:data
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

export const fetchMyAdvertiseData =(data)=>{
    return{
        type: actionTypes.FetchMyAdvertiseData,
        data:data
    }
}

