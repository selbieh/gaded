import * as actionTypes from './AdvertiseActionType';


const intState={
    categoryId:null,
    city:null,
    advertiseList:null,
    spinner:false

}




const AdertiseReducer = (state=intState ,action)=>{
    const clonedState={...state}

    switch (action.type){
        case actionTypes.FetchAdvertiseStart :
            clonedState.spinner=true
            return clonedState
        case actionTypes.changeCategoryId:
            clonedState.categoryId=action.data
            return clonedState
        case actionTypes.FetchAdvertiseEnd :
            clonedState.spinner=false
            clonedState.categoryId=null
            return clonedState
        case actionTypes.FetchAdvertise :
            clonedState.advertiseList=action.data
            return clonedState
        
    default: return state;
    }
    

}

export default AdertiseReducer;


