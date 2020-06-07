import * as actions from './AdvertiseAction'; 
import Axios from '../../Axios/Axios';


export const subscribeToCatgory =(token,category)=>{

    return dispatch=>{
        Axios({
            method:'post',
            headers:{
                Authorization:'Token '.concat(token)
            },
            url:'/subscribe/',
            data:{
                id:category
            }
        })
        .then(res=>{
            dispatch(actions.saveSubscribedCategories(res.data.categories_id))
        })
    }
    
}

export const asyncUiStart=()=>{
    return dispatch=>{
        dispatch(actions.uiStart())
    }
}

export const fetchCategories =(token)=>{
    return dispatch=>{
        Axios({
            method:'GET',
            headers:{
                Authorization :'Token '.concat(token)
            },
            url:'/subscribed-category/',
        
        })
        .then(res =>{
            dispatch(actions.saveSubscribedCategories(res.data.categories_id))
        })
    }
}




export const asyncFetchAdveritse =(full_name_string)=>{

   return dispatch=>{
        dispatch(actions.fetchAdvertiseStart())
        Axios.get(`/advertise/?category=${full_name_string}`)
        .then(res=>{
            dispatch(actions.fetchAdvertise(res.data))
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



export const createAdvertise=(formData,token)=>{
    return dispatch =>{
        dispatch(actions.fetchAdvertiseStart())
        Axios({    
            url:'/advertise/',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:'Token '.concat(token),
            },
            data:formData,
            method:'Post'

        }
      )
      .then (res => {
        dispatch(actions.fetchAdvertiseEnd())
    })
    .catch(er=>{
        console.log(er)
    })
    }
}



export const  asyncMyAdvertiseList = (token) => {

    return dispatch =>{
        dispatch(actions.fetchAdvertiseStart())

        Axios({
            method:'get',
            url:'/advertise/?fromRoute=myAdvertise',
            headers:{
                Authorization:'Token '.concat(token),
            },            
        })
        .then(res =>{
            dispatch(actions.fetchMyAdvertiseData(res.data))
            dispatch(actions.fetchAdvertiseEnd())
        })
        .catch ( er =>{
            dispatch(actions.fetchAdvertiseEnd())

        })
    }
}




export const deleteAdvertise =(item,token)=>{
    console.log(token)
   return dispatch=>{
    Axios({
        method:'delete',
        url:`/advertise/${item.id}/`,
        headers:{
            Authorization:'Token '.concat(token)//localStorage.getItem('token'))//'d15329184e916c5fa6b464c91742bf7b1ab791e9')
        },
    })
    .then(res=> {
        dispatch(asyncMyAdvertiseList())
    })

    }
} 



export const editAdvertise=(formData,Id,token)=>{
    return dispatch =>{
        dispatch(actions.fetchAdvertiseStart())
        Axios({    
            url:`advertise/${Id}/`,
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:'Token '.concat(token),
            },
            data:formData,
            method:'put'

        }
      )
      .then (res => {
        dispatch(actions.fetchAdvertiseEnd())
    })
    .catch(er=>{
        console.log(er)
    })
    }
}



 export const Paginate=(source,link,token)=>{

        if (source === 'myAdvertise'){


            return dispatch =>{
                dispatch(actions.fetchAdvertiseStart())
        
                Axios({
                    method:'get',
                    url:link,
                    headers:{
                        Authorization:'Token '.concat(token),
                        //localStorage.getItem('token'))//'d15329184e916c5fa6b464c91742bf7b1ab791e9')
                    },            
                })
                .then(res =>{
                    dispatch(actions.fetchMyAdvertiseData(res.data))
                    dispatch(actions.fetchAdvertiseEnd())
                })
                .catch ( er =>{
                    dispatch(actions.fetchAdvertiseEnd())
        
                })
            }



        }else if (source === 'allAdvertises'){

            return dispatch=>{
                dispatch(actions.fetchAdvertiseStart())
                Axios.get(link)
                .then(res=>{
                    dispatch(actions.fetchAdvertise(res.data))
                    dispatch(actions.fetchAdvertiseEnd())
        
                })
                .catch(er=>{
                    dispatch(actions.fetchAdvertiseEnd())
                })
               
                
            }


        }else{
            return
        }
}