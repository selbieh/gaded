import React,{Component} from 'react';
import AddAdvertiseForm from './addAvertiseForm/addAdvertiseForm';
import Category from '../BuyNow/Categories/Catgeory/Category';
import {Col,Row,Container} from 'reactstrap';
import oldBoxItems from '../Landing/SellSector/oldBoxItems.png';
import classes from './addAdvertise.module.css';
import { connect } from 'react-redux';
import * as asyncActions from '../Reducers/AdvertiseReducer/AsyncAdvertiseActions' ;

class addAdvertise extends Component {


    componentDidMount(){

        this.props.uiDidMount()

    }
    render() {

        

        let catgeory =(
            <Row>    
                        <Col lg='12'>
                            <Category />
                        </Col>
                    </Row>
        )
        if (this.props.spinner || this.props.dataSent){
            catgeory=null
        }
        return (
            <Container>

                <Row>

                            
                    <Col lg='6' xs="12" className={classes.imageContainer} > 
                                <img src={oldBoxItems} className = "img-fluid" alt = 'oldBoxItems' />
                    </Col>

                        <Col lg='6' xs="12" > 

                        {catgeory}
                        
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


const mapStateToProps=state=>{
    return{
        spinner:state.advertise.spinner,
        dataSent:state.advertise.dataSent,

    }
}



const mapActionToProps = dispatch =>{

    return {
        uiDidMount:()=>dispatch(asyncActions.asyncUiStart())
    }
}
export default connect(mapStateToProps,mapActionToProps)(addAdvertise);