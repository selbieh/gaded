import React from 'react';
import Category from './Catgeory/Category';
import * as styles from './Categories.module.css';
import {connect} from 'react-redux';
import * as actions from '../../Reducers/AdvertiseReducer/AsyncAdvertiseActions';




const Categories =(props)=>{


const findHandler=()=>{
    props.getProducts(props.selectedCatgeroy.full_name_string)
}



 
    return(
        <React.Fragment>
                    <Category  />
                            <div className={styles.buttonContainer}>
                                <button className={styles.button} onClick={findHandler} 
                                disabled={props.selectedCatgeroy===null}
                                >FIND</button>
                            </div>



        </React.Fragment>
        
    )
}
const mapeStateToProps=state=>{
    return{
        selectedCatgeroy:state.advertise.categoryId,
        showSpiner:state.advertise.spinner
    }
}

const mapeActionsToProps=dispatch=>{
    return {
        getProducts:(selectedCatgeroy)=>dispatch(actions.asyncFetchAdveritse(selectedCatgeroy))
    }
}

export default connect(mapeStateToProps,mapeActionsToProps) (Categories);