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
                <h1>Selling old items?</h1>
            </div>
            <Container >
                
                <Row>
                    <Col lg='6' xs="12" > 
                        <img src={oldBoxItems} className = "img-fluid" alt = 'oldBoxItems' />
                    </Col>
              

                    <Col lg='6' xs="12"> 
                            <div className={styles.MainText}>
                           
                                <h1>
                                    How to sell your used items?<br/> 
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
                                <button onClick={addAdvertiseRedirect}>Start Selling</button>
                            </div>
                    </Col>
                    </Row>

            </Container>
        </React.Fragment>
    )
}

export default SellSector ;
