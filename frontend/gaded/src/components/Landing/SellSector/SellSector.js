import React from 'react';
import oldBoxItems from './oldBoxItems.png';
import * as styles from './SellSector.module.css';
import { Container, Row, Col } from 'reactstrap';
import {useHistory} from 'react-router-dom';


const SellSector = ()=>{

    let history = useHistory()
    const addAdvertiseRedirect=()=>{
        history.push('/sell-now/')
    }
    return (
        <React.Fragment>
            <div className={styles.head}>
                <h1>SELL OLD STUFF</h1>
            </div>
            <Container >
                
                <Row>
                    <Col lg='6' xs="12" > 
                        <img src={oldBoxItems} className = "img-fluid" alt = 'oldBoxItems' />
                    </Col>
              

                    <Col lg='6' xs="12"> 
                            <div className={styles.MainText}>
                           
                                <h1>
                                    HOW TO SELL <br/> OLD STUFF...?
                                </h1>
                                <br/>
                            
                                <div></div>
                                <br/>

                                    <ul>
                                        <li> creat <span>  FREE.</span> account</li>
                                        <li>Creat your own adveritse.</li>
                                        <li>upolad your stuff PIC.</li>
                                        <li>add you contact.</li>
                                    </ul>
                                <br/>
                                <button onClick={addAdvertiseRedirect}>SELL NOW</button>
                            </div>
                    </Col>
                    </Row>

            </Container>
        </React.Fragment>
    )
}

export default SellSector ;
