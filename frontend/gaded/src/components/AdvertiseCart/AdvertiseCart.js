import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import * as styles from './AdvertiseCart.module.css';
import altImage from '../AdvertiseDetail/Slider/test.jpg';

const ProductCart = (props) => {


   
    return (
      <div className={styles.CardContainer}  >
       <Card>
          {props.img ? <CardImg  top width="100%"  src={props.img} alt="Card image cap" />: <CardImg className={styles.cardImg} top width="100%" src={altImage} alt="Card image cap" />}
        <CardBody>
           
          <CardTitle>{props.title}</CardTitle>
            <CardText className={styles.CardText} > <small className={styles.CardTextInner}>{props.details}</small></CardText>
            <CardText>
              <small className={styles.smallText}>siince {props.since}</small>
            </CardText>
            <CardText>
              <small className={styles.smallText}>price {props.price}</small>
            </CardText>
            
        </CardBody>
      </Card>
       
      </div>
    );
  };
  
  export default ProductCart;