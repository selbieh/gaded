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
                    What is Gadeed? 
                </h1>
                <div></div>
                <br/>
                {token ?<p>Thanks for joining us. <br/>
                    Notice: Our services are totally free, as we are not operating as a middle man. Any transactions between you and the seller/buyer are your responsibility solely.
                </p>: <p>Gadeed is a a free service that connected sellers with products with potential to sellers with interest.</p>}
                <br/>
                {token ? null:<button onClick={redirectToAuth}>Join us</button>}
                
            </div>
        </React.Fragment>

    )
}



export default MainText ;