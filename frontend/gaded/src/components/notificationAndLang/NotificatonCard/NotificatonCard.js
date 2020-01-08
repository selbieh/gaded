import React from 'react';
import classes from './notificatonCard.module.css';
import {Badge} from 'reactstrap';
import altImage from '../../AdvertiseDetail/Slider/test.jpg'


const NotificatonCard = (props)=>{

return(



    <div className={props.item.seen ?classes.notificationContainerSeen:classes.notificationContainer}>
            <Badge color={'danger'}>{props.item.advertise.category}</Badge>
            <br/>

            {props.item.advertise.image_1 ?<img className={''} src={props.item.advertise.image_1} alt='xx' />:
            <img className = {classes.image} src={altImage} alt='xx' />}

            <br/>

            <Badge  color={'warning'}>{props.item.advertise.price}</Badge>


    </div>
)

}


export default NotificatonCard;