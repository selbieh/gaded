import React from 'react';
import MainSector from './MainSector/MainSector';
import SellSector from './SellSector/SellSector';
import BuySector from './BuySector/BuySector';

const Landing = () =>{

    return (
        <React.Fragment>
            <MainSector />
            <SellSector />
            <BuySector />
        </React.Fragment>


    )

}


export default Landing ;