import React from 'react';
import BuyPic from './BuyPic.png';
import * as styles from './BuySector.module.css';
import { Container, Row, Col } from 'reactstrap';



const BuySector = ()=>{


    return (
        <React.Fragment>
            <div className={styles.head}>
                <h1>BUY OTHER STUFF</h1>
            </div>
            <Container >
                
                <Row>
                   
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
                                <button>FIND STUFF</button>
                            </div>
                    </Col>
                    <Col lg='6' xs="12" > 
                        <img src={BuyPic} className = "img-fluid" alt = 'oldBoxItems' />
                    </Col>
                    </Row>

            </Container>
        </React.Fragment>
    )
}

export default BuySector ;
