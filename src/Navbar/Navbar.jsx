import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../_actions';
import {DropdownButton, MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";

class NabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        }
    }

    logoutUser(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        const {dispatch} = this.props;
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
                        <NavItem eventKey={5} className="gwt-Anchor" href="#"
                                 id="gwt-debug-navbar-journal">Журналы</NavItem>
                        <NavItem eventKey={6} className="gwt-Anchor" href="#"
                                 id="gwt-debug-navbar-sanctions">Санкции</NavItem>
                        <NavItem eventKey={7} className="gwt-Anchor" href="#" id="gwt-debug-navbar-serviceinfo">Служебная
                            информация</NavItem>
                        <NavDropdown eventKey={8} pullRight noCaret  title={title} id="basic-nav-dropdown" style={{ right: 60,  position: 'fixed'}}>
                            <MenuItem eventKey={8.1} className="gwt-Anchor"
                                      id="gwt-debug-navbar-usermenu-change-password-btn">Изменение пароля</MenuItem>
                            <MenuItem eventKey={8.2} onClick={()=>dispatch(userActions.logout())}>Выход</MenuItem>
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

/*
className Navbar extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        return (
            <div classNameName="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span classNameName="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(Navbar);
export { connectedHomePage as Navbar };*/
