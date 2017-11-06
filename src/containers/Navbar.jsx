import React from 'react';
import {connect} from 'react-redux';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {withRouter} from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(page) {
        this.props.history.push(`/index/` + page)
    }

    render() {
        const contentTranslation = this.props.content;
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
                            {contentTranslation.page.navbar.orders}
                        </NavItem>
                        <NavItem eventKey={'users'} onSelect={this.handleChange} className="gwt-Anchor" href="#"
                                 id="gwt-debug-navbar-accounts">
                            {contentTranslation.page.navbar.users}
                        </NavItem>
                        <NavItem eventKey={'groups'} onSelect={this.handleChange} className="gwt-Anchor" href="#"
                                 id="gwt-debug-navbar-groups">
                            {contentTranslation.page.navbar.groups}
                        </NavItem>
                        <NavItem eventKey={'devices'} onSelect={this.handleChange} className="gwt-Anchor"
                                 id="gwt-debug-navbar-devices">
                            {contentTranslation.page.navbar.devices}
                        </NavItem>
                        <NavItem eventKey={'journals'} onSelect={this.handleChange} className="gwt-Anchor"
                                 id="gwt-debug-navbar-journal">
                            {contentTranslation.page.navbar.journals}
                        </NavItem>
                        <NavItem eventKey={'sanctions'} onSelect={this.handleChange} className="gwt-Anchor"
                                 id="gwt-debug-navbar-sanctions">
                            {contentTranslation.page.navbar.sanctions}
                        </NavItem>
                        <NavItem eventKey={'serviceInfo'} onSelect={this.handleChange} className="gwt-Anchor"
                                 id="gwt-debug-navbar-serviceinfo">
                            {contentTranslation.page.navbar.serviceInfo}
                        </NavItem>
                        <NavDropdown eventKey={8} pullRight noCaret title={title} id="basic-nav-dropdown"
                                     style={{right: 60, position: 'fixed', zIndex: 400}}>
                            <MenuItem eventKey={8.1} className="gwt-Anchor"
                                      id="gwt-debug-navbar-usermenu-change-password-btn">
                                {contentTranslation.page.navbar.changePassword}
                            </MenuItem>
                            <LinkContainer to="/login">
                                <MenuItem eventKey={8.2}>
                                    {contentTranslation.page.navbar.exit}
                                </MenuItem>
                            </LinkContainer>
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

export default withRouter(connect(mapStateToProps)(NavBar));
