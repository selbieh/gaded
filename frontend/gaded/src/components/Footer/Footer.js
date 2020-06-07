import React from 'react';
import * as styles from './Footer.module.css';



const Footer =()=>{

    return (
        

        <div className={styles.footer}>
                <div className={styles.copyright}>
                    <h2><span>G</span>ADEED</h2>
                </div>
                <div className={styles.social}>
                    <a href="/Help/" className={styles.support}>Contact us</a>
                    <a href="https://www.facebook.com/youssef.elbieh/" className={styles.face} >f</a>
                    <a href="/" className={styles.tweet} >t</a>
                    <a href="https://www.linkedin.com/in/sayed-elbieh-892a6917a/" className={styles.linked} >in</a>
                </div>
                </div>
    )
}


export default Footer ;