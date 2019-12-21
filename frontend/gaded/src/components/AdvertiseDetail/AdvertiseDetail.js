import React from 'react';
import {Redirect} from 'react-router-dom'
import Slider from './Slider/Slider'
import altImage from './Slider/test.jpg';
import AdvertiseDetailsMenue from './advertiseDetailsMenue/advertiseDetailsMenue';


const AdvertiseDetail = (props) =>{

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