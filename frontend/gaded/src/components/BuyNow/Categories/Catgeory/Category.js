/* eslint-disable no-use-before-define */
import React,{useEffect,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Axiox from '../../../Axios/Axios';



export default function Category() {

  const  [initList,setList]=useState([])
  const  [initSubList,settSubList]=useState([])
  const  [initDeepSubList,setDeepSubList]=useState([])



  const  [MaincategoryId,setMainCategoryID]=useState(null)
  const  [subCategoryId,SetsubCategoryId]=useState(null)


  const [selectedCategoryId,setSelectedCategoryId]=useState(null)


  

  useEffect(()=>{
   Axiox.get('/get-categories/')
   .then(res=>{
     setList(res.data)
   })
  },[])
  
  

  const mainCatgeoryChanged =(e,value)=>{
    if (value){
      setMainCategoryID(value)
      console.log(selectedCategoryId)


      Axiox.get(`/get-categories/?parent_id=${value.id}`)
      .then(res=>{
        settSubList(res.data)
      })
      setSelectedCategoryId(value)


  
    }else{
      setMainCategoryID(null)

      setSelectedCategoryId(null)
    }
    }


    const subCatgeoryChanged =(e,value)=>{
      if (value){

        SetsubCategoryId(value)
        setSelectedCategoryId(value)

        Axiox.get(`/get-categories/?parent_id=${value.id}`)

        .then(res=>{
          setDeepSubList(res.data)
        })

      }else{
        SetsubCategoryId(null)
        setSelectedCategoryId(MaincategoryId)
      }
      }


      const deepCatgeoryChanged =(e,value)=>{

        if (value){
          setSelectedCategoryId(value)




        }else{
          setSelectedCategoryId(subCategoryId)

        }
       
        }
      

  console.log(selectedCategoryId)  

  return (
    <React.Fragment>
    <Autocomplete
     // id="grouped-demo"
      includeInputInList
      options={initList}
      getOptionLabel={option => option.name}
      style={{ width: 300 }}
      onChange={(e,value)=>mainCatgeoryChanged(e,value)}
      renderInput={params => (
        <TextField {...params} label="main category" variant="outlined" fullWidth />
      )}
    />

<Autocomplete
      //id="grouped-demo"
      includeInputInList
      disabled={MaincategoryId===null?true:false}
      options={initSubList}
      getOptionLabel={option => option.name}
      style={{ width: 300 }}
      onChange={(e,value)=>subCatgeoryChanged(e,value)}
      renderInput={params => (
        <TextField {...params} label="sub category" variant="outlined" fullWidth />
      )}
    />

<Autocomplete
      //id="grouped-demo"
      disabled={subCategoryId ===null? true:false}
      includeInputInList
      options={initDeepSubList}
      getOptionLabel={option => option.name}
      style={{ width: 300 }}
      onChange={(e,value)=>deepCatgeoryChanged(e,value)}
      renderInput={params => (
        <TextField {...params} label="deep category" variant="outlined" fullWidth />
      )}
    />


    </React.Fragment>
  );
}

