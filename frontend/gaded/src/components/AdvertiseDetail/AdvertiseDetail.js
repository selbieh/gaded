import React, { useEffect } from 'react';
import  { useSelector } from 'react-redux';

import {Redirect} from 'react-router-dom'
import Slider from './Slider/Slider'
import altImage from './Slider/test.jpg';
import AdvertiseDetailsMenue from './advertiseDetailsMenue/advertiseDetailsMenue';
import Axios from '../Axios/Axios';
import * as actions from '../Reducers/Notification/NotificationAction';
// import * as asyncActions from '../Reducers/Notification/AsyncNotificationActions';

import {useDispatch} from 'react-redux';

const AdvertiseDetail = (props) =>{


   let dispatch=useDispatch()
//    let getState =useSelector()

   const Advid =(props.location.state.id)



   useEffect(()=>{

        Axios.get(`/advertise/${Advid}/`)
        

      


},[props.location.state,Advid])

let token = useSelector(state=>state.auth.token)
useEffect(()=>{

    if (   props.location.state.notificationId){
        let  Noteid =(props.location.state.notificationId.id);
        // console.log('tokeeeeeeeeeeeeeeeeen')
        // console.log(token)
        Axios({
            headers:{
                Authorization:'Token '.concat(token),

            },
            method:'get',
            url:`/getUserNotification/${Noteid}/`
        })
        .then(res=>dispatch(actions.notificationUpdateUi(res.data)))
        // .then(res=>dispatch(asyncActions.asyncNotificationCount()))

    }
       
},[ props.location.state.notificationId,dispatch,token])

    if (props.location.state){



    return (

        <>
        <Slider
         img_1={props.location.state.image_1 ?props.location.state.image_1:altImage}
         img_2={props.location.state.image_2?props.location.state.image_2:altImage}
         img_3={props.location.state.image_3?props.location.state.image_3:altImage}
         />

        <AdvertiseDetailsMenue
        item={props.location.state}
        />
        </>



    )
    }else{
        return(
            <Redirect to='/' />

        )
    }
}



export default AdvertiseDetail