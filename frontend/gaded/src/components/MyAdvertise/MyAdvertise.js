import React,{ Component} from 'react';
import * as asyncActions from '../Reducers/AdvertiseReducer/AsyncAdvertiseActions';
import { connect } from 'react-redux';
import AdvertiseCard from '../AdvertiseCart/AdvertiseCart';
import {Col,Row,Container, Button} from 'reactstrap';
import * as classes from './MyAdvertise.module.css'
import DeleteConfirme from '../DeleteConfirm/DeleteConfirme';


class MyAdvertises extends Component{





    componentDidMount(){
        this.props.getMyAdveriseList()
         //localStorage.setItem('token','fff')
    }


    AdertiseDetails=(item)=>{

        this.props.history.push('/advertise-detail/',item)
      }
      
    // deleteHandler=(item)=>{
    //     this.setState({modalOpend:!this.state.modalOpend,selectedItem:item})
    // }

    render(){

        let mapedAdvertises =null;
        if ( this.props.myAdvertises ){
            mapedAdvertises=(
                <Container>
                  <Row  >    
                    {this.props.myAdvertises.map(item=>
                        <Col lg='4' sm='12' md='6' key={item.id}>
                            <AdvertiseCard
                            title={item.title}
                            details={<div className={classes.btnContainer}>
                            <Button 
                            onClick={()=>this.AdertiseDetails(item)}
                            outline color="success">Details</Button>
                            <Button outline color="warning">Edite</Button>
                            <DeleteConfirme 
                                item={item}
                                buttonLabel={'Delete'}
                                />

                            </div>}
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
    
    

        if ( !localStorage.getItem('token')){
            return (
                <h1 className={classes.paragraph}>please log in </h1>
            )
        }else if (this.props.myAdvertises.length ===0){
    
            return (
    
                <>
                <h1 className={classes.paragraph}>Sorry you have no advertises Yet</h1>
                </>
            )
    
        }else{
            return (
    
                <>
                {mapedAdvertises}
                
                </>
            )
        }
        
    }
    }



    

   
    


const mapActionToProps = dispatch =>{

    return {
        getMyAdveriseList:()=>dispatch(asyncActions.asyncMyAdvertiseList())
    }
}


const mapStateToProps = state =>{
    return {
        myAdvertises:state.advertise.myAdvertiseList
    }
}

export default connect(mapStateToProps,mapActionToProps)(MyAdvertises) ;