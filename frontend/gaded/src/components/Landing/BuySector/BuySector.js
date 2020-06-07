import React from 'react';
import BuyPic from './BuyPic.png';
import * as styles from './BuySector.module.css';
import { Container, Row, Col } from 'reactstrap';
import {useHistory} from 'react-router-dom'


const BuySector = ()=>{
    let history =useHistory()
    const buyNowredirect =()=>{
        history.push('/buy-now/')
    }

    return (
        <React.Fragment>
            <div className={styles.head}>
                <h1>Find Other Services</h1>
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
                                        <li> Create a <span>FREE</span> account.</li>
                                        <li>Create your own ad.</li>
                                        <li>Upolad pictures.</li>
                                    </ul>
                                <br/>
                                <button onClick={buyNowredirect}>Search Products</button>
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
