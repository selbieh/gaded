import React, { Component } from 'react';
import PushHandler from './components/PushHandler/PushHandler';
import TheNavBar from './components/NavBar/navBar';
import { BrowserRouter} from 'react-router-dom';
import NottifticationAndLang from './components/notificationAndLang/notificationAndLang';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';





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
                      <Landing />
                      <Footer/>
                    </BrowserRouter>
            </React.Fragment>

        );
    }
}

export default App;