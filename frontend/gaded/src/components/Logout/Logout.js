import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as asyncAuthActions from '../Reducers/Auth/AsyncAuthActions';
import {Redirect} from 'react-router-dom'

class Logout extends Component{

    componentDidMount () {
        this.props.logout()
        

    }

    render (){
        return (
            <Redirect to='/' />
        );
    }

}

const mapeStateToProps = state =>{
    return{
        token:state.auth.token,
        mobile:state.auth.mobile,

    }
}

const mapActionTpProps = dispatch =>{
    return{
        logout :()=>dispatch(asyncAuthActions.asyncLogout())
    }
}

export default connect (mapeStateToProps,mapActionTpProps) (Logout);