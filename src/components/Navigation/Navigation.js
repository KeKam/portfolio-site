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
import Scrollspy from 'react-scrollspy';
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
    const backgroundColor = hasScrolledDown ? 'black-background' : '';
    const navFontColor = hasScrolledDown ? 'white-font' : 'black-font';
    return (
      <div>
        <Navbar className={backgroundColor} fixed={'top'} light expand='md'>
          <NavbarBrand className={navFontColor} href='/'>
            KENTA KAMIMURA
          </NavbarBrand>
          <NavbarToggler className={navFontColor} onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Scrollspy 
              items={ ['about', 'skillset', 'projects', 'contact'] }
              currentClassName='is-current'
              className={`${navFontColor} ml-auto navbar-nav`} 
              navbar
            >
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
            </Scrollspy>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;