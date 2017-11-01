import React from 'react';
import {connect} from 'react-redux';
import {userActions} from '../_actions';
import {Button, ButtonGroup, DropdownButton, MenuItem} from "react-bootstrap";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({submitted: true});
        const {username, password} = this.state;
        const {dispatch} = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const {username, password, submitted} = this.state;
        return (
            <div id="page-container">
                <div className="login-screen" id="gwt-debug-sorm.ui.main" style={{height: 521}}>
                    <div className="logo"><img className="logo-image img-responsive"
                                               src="/login_files/logo_protei.png"/></div>
                    <div className="login-form">
                        <form name="form" onSubmit={this.handleSubmit} id="loginForm">
                            <div className={'row'}>
                                <div className={'col-xs-12 form-group ' + (submitted && !username ? 'has-error' : '')}>
                                    <input type="text" className="form-control" name="username"
                                           value={username} onChange={this.handleChange}
                                           placeholder="Имя пользователя"
                                           id="gwt-debug-auth-login-field"/>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-xs-12 form-group ' + (submitted && !password ? 'has-error' : '')}>
                                    <input type="password" className="form-control" name="password"
                                           value={password}
                                           placeholder="Пароль" id="gwt-debug-auth-password-field"
                                           onChange={this.handleChange}/>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <ButtonGroup className="col-xs-12">
                                <Button type="submit" className="col-xs-4 btn-primary"
                                        id="gwt-debug-auth-submit-btn" form="loginForm">
                                    Вход
                                </Button>
                                <DropdownButton pullRight title={""} className="btn-primary glyphicon glyphicon-globe"
                                                id="bg-nested-dropdown">
                                    <MenuItem id="gwt-debug-auth-locale-en" eventKey="1">English</MenuItem>
                                    <MenuItem id="gwt-debug-auth-locale-ru" eventKey="2">Русский</MenuItem>
                                </DropdownButton>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export {connectedLoginPage as LoginPage};