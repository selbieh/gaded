import React,{Component} from 'react';
import AddAdvertiseForm from './addAvertiseForm/addAdvertiseForm';
import Category from '../BuyNow/Categories/Catgeory/Category';
import {Col,Row,Container} from 'reactstrap';
import oldBoxItems from '../Landing/SellSector/oldBoxItems.png';
import classes from './addAdvertise.module.css';

class addAdvertise extends Component {
    // state = {  }
    render() {
        return (
            <Container>

                <Row>

                            
                    <Col lg='6' xs="12" className={classes.imageContainer} > 
                                <img src={oldBoxItems} className = "img-fluid" alt = 'oldBoxItems' />
                    </Col>

                        <Col lg='6' xs="12" > 
                        <Row>    
                            <Col lg='12'>
                            <Category />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg='12'>
                            <AddAdvertiseForm />

                            </Col>
                        </Row>
                        </Col> 
                </Row>

            </Container>

        );
    }
}

export default addAdvertise;