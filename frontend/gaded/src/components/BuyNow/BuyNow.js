import React from 'react';
import * as styles from './BuyBow.module.css'
import Categories from './Categories/categories';
import AdvertiseCart from '../AdvertiseCart/AdvertiseCart';
import {Col,Row,Container} from 'reactstrap'
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import * as asyncActions from '../Reducers/AdvertiseReducer/AsyncAdvertiseActions';




const BuyNow = (props)=>{

    let history = useHistory();

    
    const AdertiseDetails=(item)=>{

      history.push('/advertise-detail/',item)
    }    



  const  paginateNext=()=>{
      console.log(props.advertises.advertiseList.next)
        props.paginate('allAdvertises',props.advertises.advertiseList.next)
  }
 const paginateprevious=()=>{
    props.paginate('allAdvertises',props.advertises.advertiseList.previous)
}

let advertises= null
if(props.advertises.advertiseList){
    advertises=(
        <Container>
          <Row  >
            {props.advertises.advertiseList.results.map(item=>
                <Col lg='4' sm='12' md='6' key={item.id} onClick={()=>AdertiseDetails(item)}>
                    <AdvertiseCart
                    title={item.title}
                    details={item.details}
                    since={item.since}
                    img={item.image_1}   
                    price={item.price}
                    aprroved={item.aprroved}
                    />
                </Col>
            )}
        </Row>
        <div className={styles.paginatorContainer} >
                <Pagination size="lg"  aria-label="Page navigation example">

                        <PaginationItem disabled={!props.advertises.advertiseList.previous}>
                            <PaginationLink previous  onClick={paginateprevious}/>
                        </PaginationItem>

                        <PaginationItem disabled={!props.advertises.advertiseList.next}>
                            <PaginationLink next   onClick={paginateNext}/>
                        </PaginationItem>
                 </Pagination>
                 </div>


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
        advertises:state.advertise
    }
}
const mapActionToProps = dispatch =>{

    return {
        paginate:(source,link)=>dispatch(asyncActions.Paginate(source,link))
    }
}

export default connect(mapeStateToProps,mapActionToProps)(BuyNow);