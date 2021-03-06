import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,   MDBNavItem, MDBFooter, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu,  MDBDropdownItem } from "mdbreact";
import { ReactComponent as Logo } from './assets/logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {

  state={
    collapseID: ""
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  render() {

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className="flyout">
          <MDBNavbar color="secondary-color" dark expand="md" fixed="top" scrolling>
            <MDBNavbarBrand href="/">
              { /*<Logo style={{ height: '2.5rem', width: "2.5rem" }} /> */}
              Caroline Calder
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse("mainNavbarCollapse")} />
            <MDBCollapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    Home
                  </MDBNavLink>
                </MDBNavItem>
                
                <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <div className="d-none d-md-inline">Services</div>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu right>
                        <MDBDropdownItem href="/services/marketing">Digital Marketing</MDBDropdownItem>
                        <MDBDropdownItem href="/services/web">Web Development</MDBDropdownItem>
                        <MDBDropdownItem href="/services/Design">Design</MDBDropdownItem>
                        
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/contact"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    Contact
                  </MDBNavLink>
                </MDBNavItem>
                
                
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>
          <MDBFooter color="indigo" style={{ marginTop: "4rem" }}>
            <p className="footer-copyright mb-0 py-3 text-center">
              &copy; {new Date().getFullYear()} Copyright 
            </p>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
