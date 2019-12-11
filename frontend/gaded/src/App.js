import React, { Component, Suspense,lazy } from 'react';
import PushHandler from './components/PushHandler/PushHandler';
import TheNavBar from './components/NavBar/navBar';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import NottifticationAndLang from './components/notificationAndLang/notificationAndLang';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';




const ContactUS = lazy(()=>import('./components/ContactUs/ContactUs'));




class App extends Component {

    componentDidUpdate(){
      
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
                                <Route path='/' exact>{Landing}</Route>

                             

                            </Switch>
                            </Suspense>    
                      <Footer/>
                    </BrowserRouter>
            </React.Fragment>

        );
    }
}

export default App;