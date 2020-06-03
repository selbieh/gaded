import React,{Component} from 'react';
import AddAdvertiseForm from './addAvertiseForm/addAdvertiseForm';
import Category from '../BuyNow/Categories/Catgeory/Category';
import {Col,Row,Container} from 'reactstrap';
import oldBoxItems from '../Landing/SellSector/oldBoxItems.png';
import classes from './addAdvertise.module.css';
import { connect } from 'react-redux';
import * as asyncActions from '../Reducers/AdvertiseReducer/AsyncAdvertiseActions' ;
import { Redirect } from 'react-router-dom';

class addAdvertise extends Component {


    state={
        item:null
    }

   
    componentDidMount(){
       
        this.props.uiDidMount()
       if (this.props.location.state && this.props.history.location.pathname ==='/edit-advertise/' ){
        
           this.setState({item:this.props.location.state})
       }else {
        this.setState({item:null})
       }

       
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
        }else if(this.props.location.state){
        catgeory=(
            <Row>    
            <Col lg='12'>
                <h3 className={classes.catgeory}><span>Type:</span>{this.props.location.state.category}</h3>

            </Col>
        </Row>
        )
        }else if(!this.props.token){
            catgeory=<Redirect to='/auth/'/>
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
                            <AddAdvertiseForm 
                            item={this.props.location.state}/>

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
        token:state.auth.token

    }
}



const mapActionToProps = dispatch =>{

    return {
        uiDidMount:()=>dispatch(asyncActions.asyncUiStart())
    }
}
export default connect(mapStateToProps,mapActionToProps)(addAdvertise);