import React,{useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NotificatonCard from './NotificatonCard/NotificatonCard';
import Badge from '@material-ui/core/Badge';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import * as classes from './notificationAndLang.module.css';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import * as asyncActions from '../Reducers/Notification/AsyncNotificationActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const ITEM_HEIGHT = 48;

export default function LongMenu() {


const dispatch=useDispatch()

useEffect(()=>{

  dispatch(asyncActions.asyncFetchNotification())
},[dispatch])



  const notifications = useSelector(state => state.notifications)
  const notificationCount=notifications.results.filter(e=>e.seen===false).length

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const moreNotification=()=>{
    if (notifications.next)
      dispatch(asyncActions.asyncFetchNotification(notifications.next))
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div  className={classes.dorpDownBut} >
    
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
           <Badge badgeContent={notificationCount } color='error'>
                  <NotificationImportantIcon style={{color:'white'}} />
            </Badge>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 12,
            width: 175,
          },
        }}
      >
        {notifications.results.map(item => (
          <MenuItem key={item.id} selected={item === 'Pyxis'} onClick={handleClose}>
            <NotificatonCard item={item}/>
          </MenuItem>
        ))}
        <div 
         onClick={moreNotification}
         className={notifications.next?classes.moreContainer:classes.moreContainerDisabled}
        >
        <Badge >more</Badge>
        <ExpandMoreIcon 
        fontSize='large'
        />
        </div>

      </Menu>
    </div>
  );
}