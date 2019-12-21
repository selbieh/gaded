/* eslint-disable no-use-before-define */
import React,{useEffect,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Axiox from '../../../Axios/Axios';
import {Col,Container,Row} from 'reactstrap';
import * as styles from './Category.module.css';
import {connect } from 'react-redux';
import * as actions from '../../../Reducers/AdvertiseReducer/AsyncAdvertiseActions';

 const  Category=(props)=> {

  const  [initList,setList]=useState([])
  const  [initSubList,settSubList]=useState([])
  const  [initDeepSubList,setDeepSubList]=useState([])



  const  [MaincategoryId,setMainCategoryID]=useState(null)
  const  [subCategoryId,SetsubCategoryId]=useState(null)





  

  useEffect(()=>{
   Axiox.get('/get-categories/')
   .then(res=>{
     setList(res.data)
   })
  },[])

  

  const mainCatgeoryChanged =(e,value)=>{
    if (value){
      setMainCategoryID(value)


      Axiox.get(`/get-categories/?parent_id=${value.id}`)
      .then(res=>{
        settSubList(res.data)
      })
      //setSelectedCategoryId(value)
      props.changeSelectedId(value)


  
    }else{
      setMainCategoryID(null)

      //setSelectedCategoryId(null)
      props.changeSelectedId(null)
    }
    }


    const subCatgeoryChanged =(e,value)=>{
      if (value){

        SetsubCategoryId(value)
        //setSelectedCategoryId(value)
        props.changeSelectedId(value)

        Axiox.get(`/get-categories/?parent_id=${value.id}`)

        .then(res=>{
          setDeepSubList(res.data)
        })

      }else{
        SetsubCategoryId(null)
        //setSelectedCategoryId(MaincategoryId)
        props.changeSelectedId(MaincategoryId)
      }
      }


      const deepCatgeoryChanged =(e,value)=>{

        if (value){
          //setSelectedCategoryId(value)
          props.changeSelectedId(value)




        }else{
          //setSelectedCategoryId(subCategoryId)
          props.changeSelectedId(subCategoryId)

        }
       
        }
      
  
  return (
    <React.Fragment>

      <Container className={styles.container} >

        <Row className={styles.row}>
          <Col className={styles.colum} lg='4' sm='12'>
                <Autocomplete
                // id="grouped-demo"
                  className={styles.autocomplete}
                  includeInputInList
                  options={initList}
                  getOptionLabel={option => option.name}
                  onChange={(e,value)=>mainCatgeoryChanged(e,value)}
                  renderInput={params => (
                    <TextField {...params} label="main category" variant="outlined" fullWidth />
                  )}
                />
              </Col>

          <Col  className={styles.colum} lg='4' sm='12'>

              <Autocomplete
                    //id="grouped-demo"
                    className={styles.autocomplete}

                    includeInputInList
                    disabled={MaincategoryId===null?true:false}
                    options={initSubList}
                    getOptionLabel={option => option.name}
                    onChange={(e,value)=>subCatgeoryChanged(e,value)}
                    renderInput={params => (
                      <TextField {...params} label="sub category" variant="outlined" fullWidth />
                    )}
                  />
              </Col>
          <Col  className={styles.colum} lg='4' sm='12'>
            <Autocomplete
                  //id="grouped-demo"
                  className={styles.autocomplete}

                  disabled={subCategoryId ===null? true:false}
                  includeInputInList
                  options={initDeepSubList}
                  getOptionLabel={option => option.name}
                  onChange={(e,value)=>deepCatgeoryChanged(e,value)}
                  renderInput={params => (
                    <TextField {...params} label="deep category" variant="outlined" fullWidth />
                  )}
                />
            </Col>
            </Row>
      </Container>


    </React.Fragment>
  );
}


const mapActionsToProps= (dispatch)=>{

  return{
    changeSelectedId:(selectedCategoryId)=>dispatch(actions.categoryIdChanged(selectedCategoryId))
  }
}


export default connect(null,mapActionsToProps)(Category);