import * as actionTypes from './AdvertiseActionType';


const intState={
    categoryId:null,
    city:null,
    advertiseList:null,
    spinner:false,
    dataSent:false,
    myAdvertiseList:{
        results:[],
        next:null,
        previous:null
    }

}




const AdertiseReducer = (state=intState ,action)=>{
    const clonedState={...state}

    switch (action.type){
        case actionTypes.FetchAdvertiseStart :
            clonedState.spinner=true
            clonedState.dataSent=false
            return clonedState


        case actionTypes.changeCategoryId:
            clonedState.categoryId=action.data
            return clonedState


        case actionTypes.FetchAdvertiseEnd :
            clonedState.spinner=false
            clonedState.categoryId=null
            clonedState.dataSent=true
            return clonedState

        case actionTypes.uiStart :
            clonedState.spinner=false
            clonedState.categoryId=null
            clonedState.dataSent=false
            return clonedState

        case actionTypes.FetchAdvertise :
            clonedState.advertiseList=action.data
            return clonedState

        case actionTypes.FetchMyAdvertiseData :
            clonedState.myAdvertiseList=action.data
            return clonedState  


        case actionTypes.FetchAdvertiseFailed :
            clonedState.spinner=false
            clonedState.dataSent=false
            clonedState.categoryId=null
            return clonedState
        
    default: return state;
    }
    

}

export default AdertiseReducer;


