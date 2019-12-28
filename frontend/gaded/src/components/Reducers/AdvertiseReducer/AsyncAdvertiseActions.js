import * as actions from './AdvertiseAction'; 
import Axios from '../../Axios/Axios';


export const asyncUiStart=()=>{
    return dispatch=>{
        dispatch(actions.uiStart())
    }
}





export const asyncFetchAdveritse =(full_name_string)=>{

   return dispatch=>{
        dispatch(actions.fetchAdvertiseStart())
        Axios.get(`/advertise/?category=${full_name_string}`)
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



export const createAdvertise=(formData)=>{
    return dispatch =>{
        dispatch(actions.fetchAdvertiseStart())
        Axios({    
            url:'/advertise/',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'                   
            },
            data:formData,
            method:'Post'

        }
      )
      .then (res => {
        dispatch(actions.fetchAdvertiseEnd())
    })
    }
}



export const  asyncMyAdvertiseList = () => {

    return dispatch =>{
        dispatch(actions.fetchAdvertiseStart())

        Axios({
            method:'get',
            url:'/advertise/?fromRoute=myAdvertise',
            headers:{
                Authorization:'Token '.concat('d15329184e916c5fa6b464c91742bf7b1ab791e9'),
                //localStorage.getItem('token'))//'d15329184e916c5fa6b464c91742bf7b1ab791e9')
            },            
        })
        .then(res =>{
            dispatch(actions.fetchMyAdvertiseData(res.data.results))
            dispatch(actions.fetchAdvertiseEnd())
        })
        .catch ( er =>{
            dispatch(actions.fetchAdvertiseEnd())

        })
    }
}




export const deleteAdvertise =(item)=>{
   return dispatch=>{
    Axios({
        method:'delete',
        url:`/advertise/${item.id}/`,
        headers:{
            Authorization:'Token '.concat('d15329184e916c5fa6b464c91742bf7b1ab791e9')//localStorage.getItem('token'))//'d15329184e916c5fa6b464c91742bf7b1ab791e9')
        },
    })
    .then(res=> {
        dispatch(asyncMyAdvertiseList())
    })

    }
} 