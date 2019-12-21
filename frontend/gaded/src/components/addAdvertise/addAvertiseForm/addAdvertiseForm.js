import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box/Box';
import { red } from '@material-ui/core/colors';
import {styles} from './styles';
import { withStyles } from '@material-ui/core/styles';
import joi from '@hapi/joi';
import axios from "../../Axios/Axios";

//import Spinner from '../spinner/spinner';
//import DjangoCSRFToken from 'django-react-csrftoken'











class ContatctUsForm extends Component {
    state = {
        value:{
          name:'',
          price:'',
          mobile:'',
          details:'',
          category:'test1 test2 test3',
          image_1:'',
          image_2:'',
          image_3:''

    
        },
        error:{
            name:'',
            price:'',
            mobile:'',
            details:'',
            category:'test1 test2 test3',
        
    
        },
        showSpinner:false,
        submited:false
        }
        
        schema={
          name:joi.string().min(3).max(30).error(errors => {
            return {
              message: `please enter advertise name`
            };
          }),
      
          mobile:joi.string().required().regex(/^[0][0-9]{10}$/).error(errors => {
            return {
              message: `please enter mobile`
            };
          }),
          details:joi.string().required().min(15).max(255).error(errors => {
            return {
              message: `please input advertise details`
            };
          }),


          price:joi.number().required().min(0.5).max(9999999999999999999999999999999999999999999999999999999999999999999999).error(errors => {
            return {
              message:`please input the price`
            };
          })
        }
      
        formValidate=()=>{
          const errorOject={}
          const result=joi.validate(this.state.value,this.schema,{abortEarly:false})
         
          if(result.error){
            for (let i of result.error.details){
              errorOject[i.path[0]]=i.message
            }
            this.setState({error:errorOject}) 
           }else{
             this.setState({error:{}})
              }
            }    

            
  

        componentDidUpdate(_, prevState){
  
          if (prevState.value.name !==  this.state.value.name ||
             prevState.value.mobile !==this.state.value.mobile||
             prevState.value.details !==this.state.value.details||
             prevState.value.price !==this.state.value.price ){
           this.formValidate()
      
          }
         }      


        submitHandler=(event)=>{
          event.preventDefault();
          this.setState({showSpinner:true})
          const formData = new FormData();
          for ( let i in this.state.value){
            formData.append(i,this.state.value[i])
          }
          axios({
            
                url:'/advertise/',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'                   
                },
                data:formData,
                method:'Post'

            }
          )
          .then(res=>{
            this.setState({showSpinner:false,submited:true})
          })
          .catch(er=>{
            this.setState({showSpinner:false,submited:true})


          })
         
             }
    
             valueInputHandler=(e,name)=>{
              const cloneState={
                ...this.state,
               }
               const clonedValue={...cloneState.value}
               clonedValue[name]=e.target.value
             this.setState({
               value:clonedValue
             })
            }
            
            onImageChangeHandler = (e,name)=>{

                const cloneState={
                    ...this.state,
                   }
                   const clonedValue={...cloneState.value}
                   clonedValue[name]=e.target.files[0]
                 this.setState({
                   value:clonedValue
                 })

            }
            
            
            
    render() {
        const {classes}= this.props
        let isButtuDisabled=true;
        if(!this.state.error.name && 
          !this.state.error.details && !this.state.error.mobile && 
          !this.state.error.price && 
          this.state.value.image_1 !=='' &&
          this.state.value.mobile.trim().length !== 0 &&
          this.state.value.details.trim().length !== 0 &&
          this.state.value.price.trim().length !== 0 &&
          this.state.value.name.trim().length ){
          isButtuDisabled=false;
        }
        let form= <form className={classes.form} onSubmit={this.submitHandler} encType="multipart/form-data" >
        <Grid container spacing={2}>

    
        
          <Grid item xs={12} >
            
            <TextField
              autoComplete="fname"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label='name'
              autoFocus
              onChange={(e)=>this.valueInputHandler(e,'name')}

            />
          </Grid>
          
         

          <Box color={red}>
              {this.state.error.name}
          </Box>
          
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="price"
              label=' price'
              name="price"
              autoComplete="price"
              onChange={(e)=>this.valueInputHandler(e,'price')}

            />
          </Grid>
          <Box color={red}> 
          {this.state.error.price}
        </Box>
       
          
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="mobile"
              label='mobile'
              type="input"
              id="mobile"
              onChange={(e)=>this.valueInputHandler(e,'mobile')}

            />
          </Grid>
          <Box color={red}>
              {this.state.error.mobile}
          </Box>
          <Grid item xs={12} style={{height:'150px',width:'100%'}}>
            <textarea
              variant="outlined"
              required
              name="details"
              label='details'
              type="textarea"
              id="details"
              autoComplete="current-password"
              onChange={(e)=>this.valueInputHandler(e,'details')}
              style={{height:'150px',width:'100%'}}

            />
          </Grid>
          <Box color={red} style={{marginTop:'15px'}}>
              {this.state.error.details}
          </Box>

          
        </Grid>

            <Grid item xs={12} >

            <input
            type='file'
            accept="image/*"
            id="contained-button-file1"
            className={classes.input}

            onChange={(e)=>this.onImageChangeHandler(e,'image_1')}
            />
            <label className={classes.lable} htmlFor="contained-button-file1">
                <Button variant="contained" color="secondary" component="span">
                Upload image 1
                </Button>
            </label>
           
        </Grid>
        <Grid item xs={12} >

            <input
            type='file'
            accept="image/*"
            id="contained-button-file2"
            className={classes.input}

            onChange={(e)=>this.onImageChangeHandler(e,'image_2')}
            />
            <label htmlFor="contained-button-file2">
                <Button variant="contained" color="primary" component="span">
                Upload image 2
                </Button>
            </label>
           
        </Grid><Grid item xs={12} >

            <input
            type='file'
            accept="image/*"
            id="contained-button-file3"
            className={classes.input}

            onChange={(e)=>this.onImageChangeHandler(e,'image_3')}
            />
            <label htmlFor="contained-button-file3">
                <Button variant="contained" color="primary" component="span">
                Upload image 3
                </Button>
            </label>
           
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={isButtuDisabled}

        >              
         Create Advertise
        </Button>

        
      </form>
      if (this.state.showSpinner){
        form=<p>spinner</p>
      }else if (!this.state.showSpinner && this.state.submited){
          form=<p> YOUR ADVERTISE WILL BE PUPLISHED AFTER ADMIN REVSION</p>
      }


     

        return (
            <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
                
                
                <Typography component="h1" variant="h5" align='center'>
                    ADD Advertise
                </Typography>
                    {form}         
          </div>
          
        </Container>
        );
    }
}




export default withStyles(styles)(ContatctUsForm);