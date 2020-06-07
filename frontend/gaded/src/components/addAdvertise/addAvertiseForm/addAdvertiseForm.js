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
import { connect } from 'react-redux';
import * as asyncAtions from '../../Reducers/AdvertiseReducer/AsyncAdvertiseActions'

//import Spinner from '../spinner/spinner';
//import DjangoCSRFToken from 'django-react-csrftoken'











class ContatctUsForm extends Component {

    state = {
        value:{
          name:'',
          price:'',
          contacts:'',
          details:'',
          category:'',
          image_1:'',
          image_2:'',
          image_3:''

    
        },
        error:{
            name:'',
            price:'',
            contacts:'',
            details:'',
            category:'',
        
    
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
      
          contacts:joi.string().required().regex(/^[0][0-9]{10}$/).error(errors => {
            return {
              message: `please enter Mobile EX:01XXXXXXXXX`
            };
          }),
          details:joi.string().required().min(15).max(255).error(errors => {
            return {
              message: `please input advertise details`
            };
          }),


          price:joi.number().required().min(0.5).max(9999999999999999999999999999999999999999999999999999999999999999999999)
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

            
        componentDidMount(){
         
          if(this.props.item){
           let clonedState={...this.state,value:this.props.item}
            this.setState(clonedState)
          }
        }

        componentDidUpdate(_, prevState){
  
          if (prevState.value.name !==  this.state.value.name ||
             prevState.value.contacts !==this.state.value.contacts||
             prevState.value.details !==this.state.value.details||
             prevState.value.price !==this.state.value.price ){
           this.formValidate()
      
          }
         }      

         editHandler=(event)=>{
          event.preventDefault();
          const formData = new FormData();
          for ( let i in this.state.value){
            if (!['aprroved','number_of_viewer','id','since','from','image_2','image_1','image_3'].includes(i)){
              formData.append(i,this.state.value[i])
            } 
          }
          for (let im of ['image_2','image_1','image_3']){
           if ( this.state.value[im] && typeof(this.state.value[im])!=='string' ){
            formData.append(im,this.state.value[im])
           }
         
          }


          this.props.editAdvertise(formData,this.props.item.id,this.props.token)

             }


        submitHandler=(event)=>{
          event.preventDefault();
          const formData = new FormData();
          for ( let i in this.state.value){
            formData.append(i,this.state.value[i])
          }
          formData.append('category',this.props.selectectCategory.full_name_string)
          this.props.creatAdvertise(formData,this.props.token)

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
          !this.state.error.details && !this.state.error.contacts && 
          !this.state.error.price && 
          this.state.value.image_1 !=='' &&
          this.props.selectectCategory && 
          this.state.value.contacts.trim().length !== 0 &&
          this.state.value.details.trim().length !== 0 &&
          this.state.value.price.trim().length !== 0 &&
          this.state.value.name.trim().length ){
          isButtuDisabled=false;
        }else if (!this.state.error.name &&
          !this.state.error.details && !this.state.error.contacts && 
          !this.state.error.price && 
          this.state.value.image_1 !=='' &&
          this.props.item && 
          this.state.value.contacts.trim().length !== 0 &&
          this.state.value.details.trim().length !== 0 &&
          this.state.value.price.trim().length !== 0 &&
          this.state.value.name.trim().length){
          isButtuDisabled=false;

        }
        let form= (
        <>
          <Typography component="h1" variant="h5" color='error' align='center'>
              {this.props.item ?'Edit Advertise' :'Create Advertise'}
          </Typography> 
        <form className={classes.form} onSubmit={this.props.item ?this.editHandler :this.submitHandler} encType="multipart/form-data" >
        <Grid container spacing={2}>



    
        
          <Grid item xs={12} >
            
            <TextField
              autoComplete="fname"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              value={this.state.value.name}
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
              value={this.state.value.price}

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
              id="contacts"
              label=' contacts'
              name="contacts"
              autoComplete="contacts"
              value={this.state.value.contacts}

              onChange={(e)=>this.valueInputHandler(e,'contacts')}

            />
          </Grid>
          <Box color={red}>
              {this.state.error.contacts}
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
              value={this.state.value.details}


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
            {typeof(this.state.value.image_1)==='string'?<img alt='<---' src={this.state.value.image_1} />:null }

            <Box color={red} >
              {this.state.image_1 ?null :'at least one image'}
          </Box>
          
           
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
            {typeof(this.state.value.image_2)==='string'?<img alt='<---' src={this.state.value.image_2} />:null }

           
        </Grid>
        <Grid item xs={12} >

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
            {typeof(this.state.value.image_3)==='string'?<img alt='<---' src={this.state.value.image_3} />:null }
        </Grid>

 

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={isButtuDisabled}

        >              
        {this.props.item ?'Edit Advertise' :'Create Advertise'}
        </Button>

        
      </form> </>)
      if (this.props.spinner){
        form=<p>spinner</p>
      }else if (!this.props.spinner && this.props.dataSent){
          form=<h3 className={classes.Done} > YOUR ADVERTISE WILL BE PUPLISHED AFTER ADMIN REVSION</h3>
      }


     

        return (
            <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
                
{/*                 
                <Typography component="h1" variant="h5" color='error' align='center'>
                      {this.props.item ?'Edit Advertise' :'Create Advertise'}
                </Typography> */}
                    {form}         
          </div>
          
        </Container>
        );
    }
}

const mapStateToProps = state =>{
  return {
   selectectCategory:state.advertise.categoryId,
   spinner:state.advertise.spinner,
   dataSent:state.advertise.dataSent,
   token:state.auth.token
  }
}


const mapActionsToProps = dispatch =>{
  return {
    creatAdvertise : ((formData,token)=>dispatch (asyncAtions.createAdvertise(formData,token))),
    editAdvertise: ((formData,id,token)=>dispatch(asyncAtions.editAdvertise(formData,id,token)))
  }
}


export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(ContatctUsForm));