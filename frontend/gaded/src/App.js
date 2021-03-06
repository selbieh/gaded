import React, { Component, Suspense,lazy } from 'react';
import PushHandler from './components/PushHandler/PushHandler';
import TheNavBar from './components/NavBar/navBar';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import NottifticationAndLang from './components/notificationAndLang/notificationAndLang';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';
import * as asyncActions from './components/Reducers/AdvertiseReducer/AsyncAdvertiseActions';//test
import {connect} from 'react-redux';
import * as asyncAuthActions from './components/Reducers/Auth/AsyncAuthActions'
import Logout from './components/Logout/Logout';


const ContactUS = lazy(()=>import('./components/ContactUs/ContactUs'));
const DeleteConfirme = lazy(()=>import('./components/DeleteConfirm/DeleteConfirme'));
const BuyNow = lazy(()=>import('./components/BuyNow/BuyNow'));
const AddAdvertise = lazy(()=>import('./components/addAdvertise/addAdvertise'));
const AdvertiseDetail = lazy(()=>import('./components/AdvertiseDetail/AdvertiseDetail'));
const Myadvertises= lazy(()=>import('./components/MyAdvertise/MyAdvertise'));
const EditAdvertise = lazy(()=>import('./components/addAdvertise/addAdvertise'));
const Auth = lazy(()=>import('./components/Auth/Auth'));









class App extends Component {


    componentDidMount () {
        if (localStorage.getItem('token') && localStorage.getItem('mobile')){
           this.props.authToReeducer(localStorage.getItem('mobile'),localStorage.getItem('token'))

        }
        if (localStorage.getItem('mobile') && localStorage.getItem('toekn') && localStorage.getItem('FCM')){
            this.props.registerMachinFCm(this.props.mobile,this.props.token,this.props.FCM)
        }
        if (localStorage.getItem('token')){
            this.props.getSubscribedCategories(localStorage.getItem('token'))
        }
    }
  

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
                                <Route path='/logout/' exact  component={Logout}/>
                                <Route path='/buy-now/' exact  component={BuyNow}/>

                                <Route path='/' exact>{Landing}</Route>
                                <Route path='/advertise-detail/' exact component={AdvertiseDetail} />
                                <Route path='/sell-now/' exact component={AddAdvertise} />
                                <Route path='/edit-advertise/' exact component={EditAdvertise} />

                                <Route path='/my-advirtses/' exact component={Myadvertises} />
                                <Route path='/delete-confirme/' exact component={DeleteConfirme} />
                                <Route path='/auth/' exact component={Auth} />

                                



                             

                            </Switch>
                            </Suspense>    
                      <Footer/>
                    </BrowserRouter>
            </React.Fragment>

        );
    }
}

const mapStateToProps = state=>{
    return{
        token:state.auth.token,
        mobile:state.auth.mobile,
        FCM:state.auth.FCM,


    }
}

const mapActionToProp = (dispatch)=>{
    return{
        testAction:()=>dispatch(asyncActions.asyncFetchAdveritse()),
        authToReeducer:(mobile,token)=>dispatch(asyncAuthActions.asyncSaveAuthData(mobile,token)),
        registerMachinFCm:(mobile,token,fcm)=>dispatch(asyncAuthActions.validateMachine(mobile,token,fcm)),
        getSubscribedCategories: (token)=>dispatch (asyncActions.fetchCategories(token))
    }
}
export default connect(mapStateToProps,mapActionToProp)(App);