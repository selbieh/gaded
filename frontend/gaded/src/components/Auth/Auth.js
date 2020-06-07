import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import joi from '@hapi/joi';
import * as classes from './Auth.module.css';
import Axios from '../Axios/Axios';
import { Badge } from 'reactstrap';
import {connect} from 'react-redux';
import * as actions from '../Reducers/Auth/AsyncAuthActions';
import { Redirect } from 'react-router-dom';



class Auth extends Component {



  state={
    value:{
      mobile:'',
      OTP:'',
    },
    valid:false,
    error:{},
    status:'',
  }
  

  schema={
    mobile:joi.string().required().regex(/^[0][0-9]{10}$/),
    OTP:joi.string().required().regex(/^[0-9]{6}$/),
      
    }



  componentDidUpdate(_, prevState){

    if(this.state.value.mobile !== prevState.value.mobile){

     
        this.mobileValidate()
      }


    if (this.state.value.OTP !== prevState.value.OTP){

      this.OTPValidate()
    }
    // }else if( this.state.value.OTP !== prevState.value.OTP){
    //      this.OTPValidate()
    // }

      
  }

  mobileValidate=()=>{
    const errorOject={}
    const result=joi.validate(this.state.value,this.schema)
    // console.log(this.state.error)
   
    if(result.error){
      for (let i of result.error.details){
        errorOject[i.path[0]]=i.message
      }
      this.setState({error:errorOject}) 
     }else{
       this.setState({error:{}})
        }
  }

  OTPValidate=()=>{
    const errorOject={}
    const result=joi.validate(this.state.value,this.schema)
    // console.log(this.state.error)
   
    if(result.error){
      for (let i of result.error.details){
        errorOject[i.path[0]]=i.message
      }
      this.setState({error:errorOject}) 
     }else{
       this.setState({error:{}})
        }
  }


  mobileChange=(e)=>{
    const cloneState={
      ...this.state,
     }
     const clonedValue={...cloneState.value}
     clonedValue['mobile']=e.target.value
   this.setState({
     value:clonedValue
   })
  
  }

  OTPChange=(e)=>{
    const cloneState={
      ...this.state,
     }
     const clonedValue={...cloneState.value}
     clonedValue['OTP']=e.target.value
   this.setState({
     value:clonedValue
   })
  }


  formSubmit=(e)=>{
    e.preventDefault();
  }


  onMobileOnlySubmit=()=>{

    Axios.post('/get-otp/',{mobile:this.state.value.mobile})
    .then(res=>{
      console.log(res.data)
      this.setState({status:'sent'})
    })

  }


  onMobileAndOTPSubmit=()=>{

    Axios.post('/validate-otp/',{mobile:this.state.value.mobile,otp:this.state.value.OTP})
    .then(res=>{
      // console.log(res.data)
      this.props.saveData(this.state.value.mobile,res.data.token)
    })

  }

    render() {

      let redirecitAfterAuth = null;
      if (this.props.token && this.props.mobile){
        redirecitAfterAuth =<Redirect to='/'/>;
      }

      let checlValidMobile=false
      if (!this.state.error.mobile && this.state.value.mobile.length !== 0 ){
        checlValidMobile=true 
      }


      let checlValidOtp=false
      if (!this.state.error.OTP && this.state.value.OTP.length !== 0 ){
        checlValidOtp=true 
      }
     

        return (
          <div className={classes.formContainer}>
            {redirecitAfterAuth}
            <Form onSubmit={this.formSubmit}>
           
             <FormGroup>
               <Label for="mobile"><Badge color={checlValidMobile?"info":'danger'}>SIGN IN</Badge></Label>
               <Input valid={checlValidMobile}
               disabled={this.state.status==='sent' ? true:false}
                placeholder='01XXXXXXXXX' 
                id="mobile"
                value={this.state.mobile} 
                onChange={(e)=>this.mobileChange(e)}
                invalid={!checlValidMobile}    
               />
               <FormFeedback
                valid={checlValidMobile} 
               >this Mobile is {checlValidMobile?'valid':'NOT VALID'}</FormFeedback>
               {!checlValidMobile ?<FormText>Example +201XXXXXXXXX</FormText>:null} 
             </FormGroup>

          {this.state.status==='sent' ? 
          <>
           <FormGroup>
              <Label for="OTP"><Badge color={checlValidOtp?"info":'danger'}>ENTER SMS or from console in test mode</Badge></Label>
              <Input valid={checlValidOtp}
              // disabled={this.state.status==='sent' ? true:false}
                placeholder='XXXXXX' 
                id="OTP"
                value={this.state.OTP} 
                onChange={(e)=>this.OTPChange(e)}
                invalid={!checlValidOtp}    
              />
           <FormFeedback
                // valid={checlValidMobile} 
              >this code is {checlValidOtp?'valid':'NOT VALID'}</FormFeedback>
              {!checlValidMobile ?<FormText>Example XXXXXX</FormText>:null} 
         </FormGroup>
         <Button
              onClick={this.onMobileAndOTPSubmit}
              color='info'
              disabled={!checlValidOtp}
              >CONFIRM MOBILE</Button>

         </>
          
          :
             <Button
              onClick={this.onMobileOnlySubmit}
              color='info'
              disabled={!checlValidMobile}
              >GET SMS</Button>}
            
           </Form>

           </div>
        );
    }
}

const mapStateToProps = state =>{
  return {
    token :state.auth.token,
    mobile:state.auth.mobile
  }
}
const mapActionToProp = dispatch =>{
  return{
    saveData : (mobile,token)=>dispatch(actions.asyncSaveAuthData(mobile,token))
  }
}

export default connect(mapStateToProps,mapActionToProp) (Auth);