import React from 'react';
import {connect} from 'react-redux';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {history} from "../constants/history";

class App extends React.Component {
    render() {
        const lang = this.props.content;
        const title =
            <div id="gwt-debug-navbar-usermenu-btn" className="navbar-user">
                <img alt="" src="../../styles/images/user_icon.png"/>
                <span>Superadmin2,  superadmin2   (#34), superadmins</span>
                <b className="caret"/>
            </div>;
        return (
            <div id="page-container">
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <li className="navbar-brand"><img
                                src="../../styles/images/header_icon_protei.png"
                                style={{display: 'inline', height: 28}}/></li>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={'/index/orders'} onSelect={(page) => history.push(page)}
                                 id="gwt-debug-navbar-tasks">
                            {lang.page.navbar.orders}
                        </NavItem>
                        <NavItem eventKey={'/index/users'} onSelect={(page) => history.push(page)}
                                 id="gwt-debug-navbar-accounts">
                            {lang.page.navbar.users}
                        </NavItem>
                        <NavItem eventKey={'/index/groups'} onSelect={(page) => history.push(page)}
                                 id="gwt-debug-navbar-groups">
                            {lang.page.navbar.groups}
                        </NavItem>
                        <NavItem eventKey={'/index/devices'} onSelect={(page) => history.push(page)}
                                 id="gwt-debug-navbar-devices">
                            {lang.page.navbar.devices}
                        </NavItem>
                        <NavItem eventKey={'/index/journals'} onSelect={(page) => history.push(page)}
                                 id="gwt-debug-navbar-journal">
                            {lang.page.navbar.journals}
                        </NavItem>
                        <NavItem eventKey={'/index/sanctions'} onSelect={(page) => history.push(page)}
                                 id="gwt-debug-navbar-sanctions">
                            {lang.page.navbar.sanctions}
                        </NavItem>
                        <NavItem eventKey={'/index/serviceInfo'} onSelect={(page) => history.push(page)}
                                 id="gwt-debug-navbar-serviceinfo">
                            {lang.page.navbar.serviceInfo}
                        </NavItem>
                    </Nav>
                    <Nav className="nav navbar-nav navbar-right">
                        <NavDropdown eventKey={8} pullRight noCaret title={title} id="basic-nav-dropdown">
                            <MenuItem eventKey={8.1} className="gwt-Anchor"
                                      id="gwt-debug-navbar-usermenu-change-password-btn">
                                {lang.page.navbar.changePassword}
                            </MenuItem>
                            <MenuItem onSelect={() => history.push('/login')} eventKey={8.2}>
                                {lang.page.navbar.exit}
                            </MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {content} = state.translate;
    return {
        content
    };
}

export default connect(mapStateToProps)(App);
