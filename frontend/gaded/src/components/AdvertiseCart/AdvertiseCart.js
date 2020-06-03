import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import * as styles from './AdvertiseCart.module.css';
import altImage from '../AdvertiseDetail/Slider/test.jpg';
import { Helmet } from 'react-helmet';

const ProductCart = (props) => {


   
    return (
      <div className={styles.CardContainer}  >
              <Helmet >
              <meta charSet="utf-8" />
                <title>{props.title}</title>
                <link rel="canonical" href="http://gaded.com/" />
              </Helmet>

       <Card>
          {props.img ? <CardImg  top width="100%"  src={props.img} alt="Card image cap" />: <CardImg className={styles.cardImg} top width="100%" src={altImage} alt="Card image cap" />}
        <CardBody>
           
          <CardTitle>{props.title}</CardTitle>
            <div className={styles.CardText} > <div className={styles.CardTextInner}>{props.details}</div></div>
            <CardText>
              <small className={styles.smallText}>siince {props.since}</small>
            </CardText>
            <CardText>
              <small className={styles.smallText}>price {props.price}</small>
            </CardText><CardText>
              <small className={styles.smallText}>approved by admin: {props.aprroved ?'yes':'NO'}</small>
            </CardText>
            
        </CardBody>
      </Card>
       
      </div>
    );
  };
  
  export default ProductCart;