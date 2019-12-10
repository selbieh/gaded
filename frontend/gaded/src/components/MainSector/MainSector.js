import React from 'react';
import MainPicImage from './MainPic/Mainpic';
import MainText from './MainText/MainText';
import * as styles from './MainSector.module.css';
import { Container, Row, Col } from 'reactstrap';




const MainPic= ()=>{

    return (


        <div className={styles.mainSector}>
                <Container>
                    <Row>
                        <Col lg='6' xs="12">  <MainPicImage/></Col>
                        <Col lg='6' xs="12"><MainText /></Col>
                    </Row>
            </Container>
        </div>
    )
}


export default MainPic;