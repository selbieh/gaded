import React from 'react';
import * as styles from './Footer.module.css';



const Footer =()=>{

    return (
        

        <div className={styles.footer}>
                <div className={styles.copyright}>
                    <h2><span>G</span>ADED</h2>
                </div>
                <div className={styles.social}>
                    <a href="/" className={styles.support}>Contact Us</a>
                    <a href="/" className={styles.face} >f</a>
                    <a href="/" className={styles.tweet} >t</a>
                    <a href="/" className={styles.linked} >in</a>
                </div>
                </div>
    )
}


export default Footer ;