import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as classes from './Subscribe.module.css'
import * as asyncAdvertiseActions from '../Reducers/AdvertiseReducer/AsyncAdvertiseActions'
class Subscribe extends Component {

    

    logInHandler =()=>{
        this.props.history.push('/auth/')
    }
    subscribe =()=>{
        console.log(this.props.token,this.props.selectedCategoryID)
        this.props.subscribe(this.props.token,this.props.selectedCategoryID.id)
    }

    render(){

        let X =null
        if (this.props.token && this.props.FCM && !this.props.subscribedCategoriesId.includes(this.props.selectedCategoryID)){
            X=<div className={classes.styledDiv} onClick={this.subscribe}>subscribe <div className={classes.span}>now</div></div>
        }else if (this.props.token && this.props.FCM && this.props.subscribedCategoriesId.includes(this.props.selectedCategoryID)) {
            X=<div className={classes.styledDiv}>you will be <span className={classes.span}>notified</span>  with Similar advertisese</div>
        }else if (!this.props.token || !this.props.FCM ){
            X=<div className={classes.styledDiv} onClick={this.logInHandler}>register <span className={classes.span}>now</span> to be notified</div>
        }

        return (
            <React.Fragment>
                                {X}

            </React.Fragment>
        )
    }
}

const mapStateToProps = state=>{
    return{
        token:state.auth.token,
        subscribedCategoriesId:state.advertise.subscribedCategory,
        selectedCategoryID:state.advertise.shouldSubscribedCaregoryId,
        FCM:state.auth.FCM,
        
    }
}

const mapeActionToProps = dispatch =>{
    return{
        subscribe:(token,categoryId)=>dispatch(asyncAdvertiseActions.subscribeToCatgory(token,categoryId))

    }
}

export default connect(mapStateToProps,mapeActionToProps) (Subscribe);