import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem
  } from 'reactstrap';
import Scrollspy from 'react-scrollspy';
import Scrollschor from 'react-scrollchor';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      hasScrolledDown: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleScroll = () => {
    const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrolledDown = bodyScrollTop > 75 ? true : false;
    this.setState({
      hasScrolledDown: scrolledDown
    });
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { hasScrolledDown } = this.state;
    const backgroundColor = hasScrolledDown ? 'grey-transparent-background' : '';
    return (
      <div>
        <Navbar className={backgroundColor} fixed={'top'} light expand='md'>
          <NavbarBrand className='white-font' href='/'>
            KENTA KAMIMURA
          </NavbarBrand>
          <NavbarToggler className='white-font' onClick={this.toggle}>
            <i className='fa fa-bars fa-lg white-font' />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Scrollspy 
              items={ ['about', 'projects', 'contact'] }
              currentClassName='is-current'
              className='white-font ml-auto navbar-nav'
              navbar
            >
              <NavItem>
                <Scrollschor to='#about' animate={{ duration: 600 }} className='nav-link'>
                  ABOUT ME
                </Scrollschor>
              </NavItem>
              <NavItem>
                <Scrollschor to='#projects' animate={{ duration: 600 }} className='nav-link'>
                  PROJECTS
                </Scrollschor>
              </NavItem>
              <NavItem>
                <Scrollschor to='#contact' animate={{ duration: 600 }} className='nav-link'>
                  CONTACT
                </Scrollschor>
              </NavItem>
            </Scrollspy>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;