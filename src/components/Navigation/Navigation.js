import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>
            KENTA KAMIMURA
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='#about'>
                  ABOUT ME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#skillset'>
                  SKILLSET
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#projects'>
                  PROJECTS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#contact'>
                  CONTACT
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;