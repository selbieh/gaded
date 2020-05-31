import React, { useState } from 'react';
import * as stylee from './navBar.module.css'
import { NavLink as RNlink } from 'react-router-dom';
import {useSelector} from 'react-redux'


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
  const token = useSelector(state => state.auth.token)

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
              <NavLink tag={RNlink} to="/buy-now/" activeClassName={stylee.activeLink} >FIND STUFF</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RNlink} to="/sell-now/" activeClassName={stylee.activeLink}>ADD ADVERTISE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RNlink} to="/my-advirtses/" activeClassName={stylee.activeLink}>My Advirtses</NavLink>
            </NavItem>
            {!token ? <NavItem>
              <NavLink tag={RNlink} to="/auth/" activeClassName={stylee.activeLink}>Log in</NavLink>
            </NavItem>:<NavItem>
              <NavLink tag={RNlink} to="/auth/" activeClassName={stylee.activeLink}>log out</NavLink>
            </NavItem>}
            
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