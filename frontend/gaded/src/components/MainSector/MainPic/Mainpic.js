import React from 'react';
import pic from '../../assest/1.png';
import * as styles from './MainPic.module.css';




const  thePic= ()=> {
    return(
        <div className={styles.MainPic}>
                   <img src={pic}   className="img-fluid" alt="Responsive" />

        </div>
        
      
    )
}



export default thePic;