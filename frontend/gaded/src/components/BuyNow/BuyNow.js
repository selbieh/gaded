import React from 'react';
import * as styles from './BuyBow.module.css'
import Categories from './Categories/categories';
import AdvertiseCart from '../AdvertiseCart/AdvertiseCart';
import {Col,Row,Container} from 'reactstrap'
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom'


const BuyNow = (props)=>{

    let history = useHistory();

    
    const AdertiseDetails=(item)=>{

      history.push('/advertise-detail/',item)
    }    

let advertises= null
if(props.advertises){
    advertises=(
        <Container>
          <Row  >
            {props.advertises.map(item=>
                <Col lg='4' sm='12' md='6' key={item.id} onClick={()=>AdertiseDetails(item)}>
                    <AdvertiseCart
                    title={item.title}
                    details={item.details}
                    since={item.since}
                    img={item.image_1}   
                    price={item.price}
                    />
                </Col>
            )}
        </Row>

        </Container>
    )
}

    return(
        <React.Fragment>
        <div className={styles.container}>
            <h1> <span>F</span>ind   <span>S</span>tuff</h1>
        </div>

        <Categories />

         {advertises}

        </React.Fragment>
    )
}

const mapeStateToProps=state=>{
    return{
        selectedCatgeroy:state.advertise.categoryId,
        showSpiner:state.advertise.spinner,
        advertises:state.advertise.advertiseList
    }
}


export default connect(mapeStateToProps)(BuyNow);