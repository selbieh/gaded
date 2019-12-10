import React, { useState } from 'react';
import * as stylee from './navBar.module.css'
import { NavLink as RNlink } from 'react-router-dom';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const TheBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className={stylee.NavBar}>
        <NavbarBrand tag={RNlink} to="/" className={stylee.brandName}>
         <span style={{color:'red'}}>G</span> 
         <span>A</span> 
         <span>D</span> 
         <span>E</span> 
         <span>D</span> 

          </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mr-auto" navbar >
            <NavItem>
              <NavLink tag={RNlink} to="/buy-now/" activeClassName={stylee.activeLink} >BUY NOW</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RNlink} to="/sell-now/" activeClassName={stylee.activeLink}>SELL NOW</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RNlink} to="/my-advirtses/" activeClassName={stylee.activeLink}>My Advirtses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RNlink} to="/Help/" activeClassName={stylee.activeLink}>Help</NavLink>
            </NavItem>
           
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TheBar;