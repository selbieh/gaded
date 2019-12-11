import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';




const NottifticationAndLang = ()=>{

    return(

            <div style={{textAlign:'right',background: '#560453'}}>

            <IconButton  style={{color:'white'}} >
                <Badge badgeContent={'ar' } color='error'>
                    <NotificationImportantIcon  />
                  </Badge>
            </IconButton>
            </div>       


    )
}

export default NottifticationAndLang;