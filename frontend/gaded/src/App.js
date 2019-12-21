import React, { Component, Suspense,lazy } from 'react';
import PushHandler from './components/PushHandler/PushHandler';
import TheNavBar from './components/NavBar/navBar';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import NottifticationAndLang from './components/notificationAndLang/notificationAndLang';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';
import * as asyncActions from './components/Reducers/AdvertiseReducer/AsyncAdvertiseActions';//test
import {connect} from 'react-redux';
import AdvertiseDetail from './components/AdvertiseDetail/AdvertiseDetail'




const ContactUS = lazy(()=>import('./components/ContactUs/ContactUs'));
const BuyNow = lazy(()=>import('./components/BuyNow/BuyNow'));
const AddAdvertise = lazy(()=>import('./components/addAdvertise/addAdvertise'));





class App extends Component {

    render() {
       
        return (
            <React.Fragment>
                <BrowserRouter>

                      <PushHandler/>
                      <NottifticationAndLang />
                      <TheNavBar/>
                      <Suspense fallback={<div>loading......</div>}>

                            <Switch >

                                
                                <Route path='/help/' exact  component={ContactUS}/>
                                <Route path='/buy-now/' exact  component={BuyNow}/>

                                <Route path='/' exact>{Landing}</Route>
                                <Route path='/advertise-detail/' exact>{AdvertiseDetail}</Route>
                                <Route path='/sell-now/' exact component={AddAdvertise} />



                             

                            </Switch>
                            </Suspense>    
                      <Footer/>
                    </BrowserRouter>
            </React.Fragment>

        );
    }
}
const mapActionToProp = (dispatch)=>{
    return{
        testAction:()=>dispatch(asyncActions.asyncFetchAdveritse())
    }
}
export default connect(null,mapActionToProp)(App);