import React from 'react';
import * as styles from './MainText.module.css'


const MainText = () =>{

    return (
        <React.Fragment>
            <div className={styles.MainText}>

                <h1>
                    Why do we <br/> use GADED...?
                </h1>
                <br/>
               
                <div></div>
                <br/>

                <p>
                    gaded is a new era in elcotonic treads , as no need for agent man ,just sell the old stuff
                    and buy new stuff very fast from the web or mobile<span> FOR FREE</span>.
                </p>
                <br/>
                <button>Join US</button>
            </div>
        </React.Fragment>

    )
}



export default MainText ;