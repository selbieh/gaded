import React, { Component } from 'react';
import PushHandler from './components/PushHandler/PushHandler';
import TheNavBar from './components/NavBar/navBar';
import { BrowserRouter} from 'react-router-dom';
import NottifticationAndLang from './components/notificationAndLang/notificationAndLang';
import Landing from './components/Landing/Landing';





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
                    </BrowserRouter>
            </React.Fragment>

        );
    }
}

export default App;