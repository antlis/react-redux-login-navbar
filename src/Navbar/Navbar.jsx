import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Link} from 'react-router-dom'
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

class NabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
    }

    render() {

        const title =
            <div id="gwt-debug-navbar-usermenu-btn" className="navbar-user">
                <img alt="" src="../../Journals&filter_files/user_icon.png"/>
                <span>superadmin2,  superadmin2   (#34), superadmins</span>
                <b className="caret"/>
            </div>;
        return (
            <div id="page-container">
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <li className="navbar-brand"><img
                                src="../../Journals&filter_files/header_icon_protei.png"
                                style={{display: 'inline', height: 28}}/></li>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} className="gwt-Anchor" href="#"
                                 id="gwt-debug-navbar-tasks">Задания</NavItem>
                        <NavItem eventKey={2} className="gwt-Anchor" href="#" id="gwt-debug-navbar-accounts">Учетные
                            записи</NavItem>
                        <NavItem eventKey={3} className="gwt-Anchor" href="#" id="gwt-debug-navbar-groups">Органы
                            ОРМ</NavItem>
                        <NavItem eventKey={4} className="gwt-Anchor" href="#"
                                 id="gwt-debug-navbar-devices">Устройства</NavItem>
                        <LinkContainer to="/journals">
                            <NavItem eventKey={5} className="gwt-Anchor" href="#"
                                     id="gwt-debug-navbar-journal">Журналы</NavItem>
                        </LinkContainer>
                        <NavItem eventKey={6} className="gwt-Anchor" href="#"
                                 id="gwt-debug-navbar-sanctions">Санкции</NavItem>
                        <NavItem eventKey={7} className="gwt-Anchor" href="#" id="gwt-debug-navbar-serviceinfo">Служебная
                            информация</NavItem>
                        <NavDropdown eventKey={8} pullRight noCaret title={title} id="basic-nav-dropdown"
                                     style={{right: 60, position: 'fixed'}}>
                            <MenuItem eventKey={8.1} className="gwt-Anchor"
                                      id="gwt-debug-navbar-usermenu-change-password-btn">Изменение пароля</MenuItem>
                            <LinkContainer to="/login">
                                <MenuItem eventKey={8.2}>Выход</MenuItem>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {activePage} = state;
    return {
        activePage
    };
}

const connectedNabBar = connect(mapStateToProps)(NabBar);
export {connectedNabBar as NavBar};
