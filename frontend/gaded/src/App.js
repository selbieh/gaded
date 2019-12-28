import React, { Component, Suspense,lazy } from 'react';
import PushHandler from './components/PushHandler/PushHandler';
import TheNavBar from './components/NavBar/navBar';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import NottifticationAndLang from './components/notificationAndLang/notificationAndLang';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';
import * as asyncActions from './components/Reducers/AdvertiseReducer/AsyncAdvertiseActions';//test
import {connect} from 'react-redux';




const ContactUS = lazy(()=>import('./components/ContactUs/ContactUs'));
const DeleteConfirme = lazy(()=>import('./components/DeleteConfirm/DeleteConfirme'));
const BuyNow = lazy(()=>import('./components/BuyNow/BuyNow'));
const AddAdvertise = lazy(()=>import('./components/addAdvertise/addAdvertise'));
const AdvertiseDetail = lazy(()=>import('./components/AdvertiseDetail/AdvertiseDetail'));
const Myadvertises= lazy(()=>import('./components/MyAdvertise/MyAdvertise'));






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
                                <Route path='/advertise-detail/' exact component={AdvertiseDetail} />
                                <Route path='/sell-now/' exact component={AddAdvertise} />
                                <Route path='/my-advirtses/' exact component={Myadvertises} />
                                <Route path='/delete-confirme/' exact component={DeleteConfirme} />

                                



                             

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