import React from 'react';
import * as styles from './ContactUS.module.css';
import contactUsImg from './contactUsImg.png';
import ContactUSForm from './ContactUsForm/ContactUsForm';
import {Row,Col,Container} from 'reactstrap'




const ContactUS = ()=>{

    return (
        <React.Fragment>
            <div className={styles.container}>
                <h1> <span>C</span>ontact <span>U</span>S</h1>
            </div>

            <Container >
                <Row>
                    <Col lg='6' sm='12' className={styles.colClass}>
                    <div className={styles.imgContainer}>
                        <img src={contactUsImg} className='img-fluid' alt='contactUS'/>
                    </div>

                    </Col>
                    <Col lg='6' sm='12' className={styles.colClass}>
                        <ContactUSForm /> 
                    </Col>

               
          

            </Row>
            </Container>

        </React.Fragment>
    )
}



export default ContactUS;