import React from 'react';
import {connect} from 'react-redux';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {history} from "../_constants/history";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(page) {
        history.push(`/index/` + page)
    }

    render() {
        const lang = this.props.content;
        const title =
            <div id="gwt-debug-navbar-usermenu-btn" className="navbar-user">
                <img alt="" src="../../Journals&filter_files/user_icon.png"/>
                <span>Superadmin2,  superadmin2   (#34), superadmins</span>
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
                        <NavItem eventKey={'orders'} onSelect={this.handleChange} className="gwt-Anchor" href="#"
                                 id="gwt-debug-navbar-tasks">
                            {lang.page.navbar.orders}
                        </NavItem>
                        <NavItem eventKey={'users'} onSelect={this.handleChange} className="gwt-Anchor" href="#"
                                 id="gwt-debug-navbar-accounts">
                            {lang.page.navbar.users}
                        </NavItem>
                        <NavItem eventKey={'groups'} onSelect={this.handleChange} className="gwt-Anchor" href="#"
                                 id="gwt-debug-navbar-groups">
                            {lang.page.navbar.groups}
                        </NavItem>
                        <NavItem eventKey={'devices'} onSelect={this.handleChange} className="gwt-Anchor"
                                 id="gwt-debug-navbar-devices">
                            {lang.page.navbar.devices}
                        </NavItem>
                        <NavItem eventKey={'journals'} onSelect={this.handleChange} className="gwt-Anchor"
                                 id="gwt-debug-navbar-journal">
                            {lang.page.navbar.journals}
                        </NavItem>
                        <NavItem eventKey={'sanctions'} onSelect={this.handleChange} className="gwt-Anchor"
                                 id="gwt-debug-navbar-sanctions">
                            {lang.page.navbar.sanctions}
                        </NavItem>
                        <NavItem eventKey={'serviceInfo'} onSelect={this.handleChange} className="gwt-Anchor"
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
