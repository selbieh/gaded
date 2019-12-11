import React from 'react';
import * as styles from './Footer.module.css';
import {Container,Row,Col} from 'reactstrap';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const Footer =()=>{

    return (

        <div className={styles.mainFooterDiv}>
            <Container>
                <h1><span>G</span>ADED</h1>
                <Row>
                    <Col lg='4' sm='12' className={styles.border}>

                        <PhoneInTalkIcon className={styles.Icon} style={{fontSize:56}}/>
                        <br/>
                        <br/>
                        <p style={{color:'red'}}>Phone</p>
                        <p>+201003345516</p>

                    </Col>
                    <Col lg='4' sm='12' className={styles.border}>
                        <MailIcon className={styles.Icon} style={{fontSize:56}}  />
                        <br/>
                        <br/>
                        <p style={{color:'red'}}>EMAIL</p>

                        <p>Selbieh@gmail.com</p>

                   
                    </Col>
                    <Col lg='4' sm='12' className={styles.border}>
                        <LocationOnIcon  className={styles.Icon} style={{fontSize:56}} />
                        <br/>
                        <br/>
                        <p style={{color:'red'}}>Location</p>
                        <p>+201003345516</p>
                   
                    </Col>
                </Row>
            </Container>


        </div>
    )
}


export default Footer ;