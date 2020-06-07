import React from 'react';
import * as styles from './MainText.module.css'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


const MainText = () =>{
    let token = useSelector(state=>state.auth.token)
    let history = useHistory()
    const redirectToAuth =()=>{
        history.push('/auth/')
    }
    return (
        <React.Fragment>
            <div className={styles.MainText}>

                <h1>
                    Why do we <br/> use GADED...?
                </h1>
                <br/>
               
                <div></div>
                <br/>
                {token ?<p>thanks for joining us ....remember this service is completly free and the sit not responsable about the treat procces</p>:<p>
                    gaded is a new era in elcotonic treads , as no need for agent man ,just sell the old stuff
                    and buy new stuff very fast from the web or mobile<span> FOR FREE</span>.
                </p>}
                
                <br/>
                {token ? null:<button onClick={redirectToAuth}>Join US</button>}
                
            </div>
        </React.Fragment>

    )
}



export default MainText ;