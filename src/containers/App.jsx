import React from 'react';
import {connect} from 'react-redux';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {history} from "../constants/history";
import PropTypes from "prop-types";
import {LinkContainer} from "react-router-bootstrap";

class App extends React.Component {
    render() {
        const {lang, user} = this.props;
        const title =
            <div id="gwt-debug-navbar-usermenu-btn" className="navbar-user">
                <img alt="" src="../../styles/images/user_icon.png"/>
                <span>{user.name}, {user.group.name}</span>
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
                        <LinkContainer to={'/index/orders'}>
                            <NavItem eventKey={1}
                                     id="gwt-debug-navbar-tasks">
                                {lang.orders}
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/index/users'}>
                            <NavItem eventKey={2}
                                     id="gwt-debug-navbar-accounts">
                                {lang.users}
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/index/groups'}>
                            <NavItem eventKey={3}
                                     id="gwt-debug-navbar-groups">
                                {lang.groups}
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/index/devices'}>
                            <NavItem eventKey={4}
                                     id="gwt-debug-navbar-devices">
                                {lang.devices}
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/index/journals'}>
                            <NavItem eventKey={5}
                                     id="gwt-debug-navbar-journal">
                                {lang.journals}
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/index/sanctions'}>
                            <NavItem eventKey={6}
                                     id="gwt-debug-navbar-sanctions">
                                {lang.sanctions}
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/index/serviceInfo'}>
                            <NavItem eventKey={7}
                                     id="gwt-debug-navbar-serviceinfo">
                                {lang.serviceInfo}
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav className="nav navbar-nav navbar-right">
                        <NavDropdown eventKey={8} pullRight noCaret title={title} id="basic-nav-dropdown">
                            <MenuItem eventKey={8.1} className="gwt-Anchor"
                                      id="gwt-debug-navbar-usermenu-change-password-btn">
                                {lang.changePassword}
                            </MenuItem>
                            <MenuItem onSelect={() => history.push('/login')} eventKey={8.2}>
                                {lang.exit}
                            </MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const lang = state.translate.content.page.navbar;
    const {user} = state.authentication;
    return {
        lang,
        user
    };
}

export default connect(mapStateToProps)(App);

App.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        group: PropTypes.shape({
            groupId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            parentId: PropTypes.number,
            objState: PropTypes.number.isRequired,
            //usersList: null,
            role: PropTypes.string.isRequired,
            //sanctionTypes: []
        })
    })
};
