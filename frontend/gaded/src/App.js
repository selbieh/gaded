import React, { Component } from 'react';
import PushHandler from './components/PushHandler/PushHandler';
import TheNavBar from './components/NavBar/navBar';
import MainSector from './components/MainSector/MainSector';
import { BrowserRouter} from 'react-router-dom';
import NottifticationAndLang from './components/notificationAndLang/notificationAndLang';





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
                      <MainSector/>
                      </BrowserRouter>
            </React.Fragment>

        );
    }
}

export default App;