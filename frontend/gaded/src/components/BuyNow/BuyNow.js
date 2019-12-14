import React from 'react';
import * as styles from './BuyBow.module.css'
import Categories from './Categories/categories';


const BuyNow = ()=>{


    return(
        <React.Fragment>
        <div className={styles.container}>
            <h1> <span>F</span>ind   <span>S</span>tuff</h1>
        </div>

        <Categories />

        </React.Fragment>
    )
}


export default BuyNow;