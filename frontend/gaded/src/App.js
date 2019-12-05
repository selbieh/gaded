import React, { Component } from 'react';
import PushHandler from './PushHandler';



class App extends Component {

    componentDidUpdate(){
      
    }
    render() {
        let SMS=7;
        if (caches.has('1')){
            SMS=8
        }
        return (
            <React.Fragment>
                             {SMS}
                            <PushHandler/>
            </React.Fragment>

        );
    }
}

export default App;