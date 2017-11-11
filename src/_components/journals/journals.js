import React from 'react';
import {connect} from 'react-redux';
import {Button, Overlay} from "react-bootstrap";
import * as ReactDOM from "react-dom/cjs/react-dom.production.min";

class Journals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: false
        }
    }

    render() {
        return (
            <div className="main-content">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="pull-left">
                                {/*  <DropdownButton className="btn-info btn-xs filterButton" title={'Фильтр'}
                                                id="gwt-debug-common-filter-btn">
                                    <MenuItem id="gwt-debug-journal-filter" eventKey="filter">
                                        <Filter/>
                                    </MenuItem>
                                </DropdownButton>*/}
                                <div style={{height: 100, position: 'relative'}}>
                                    <Button ref="target" onClick={this.toggle}>
                                        I am an Overlay target
                                    </Button>

                                    <Overlay
                                        show={this.state.show}
                                        onHide={() => this.setState({show: false})}
                                        placement="right"
                                        container={this}
                                        target={() => ReactDOM.findDOMNode(this.refs.target)}
                                    >
                                        <div
                                            style={{
                                                ...this.props.style,
                                                position: 'absolute',
                                                backgroundColor: '#EEE',
                                                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                                                border: '1px solid #CCC',
                                                borderRadius: 3,
                                                marginLeft: -5,
                                                marginTop: 5,
                                                padding: 10,
                                            }}
                                        >
                                            <strong>Holy guacamole!</strong> Check this info.
                                        </div>
                                    </Overlay>
                                </div>
                            </div>
                            <table className="pull-left" style={{display: 'none'}} aria-hidden="true" cellSpacing="0"
                                   cellPadding="0">
                                <tbody>
                                <tr>
                                    <td style={{verticalAlign: 'top'}} align="left">
                                        <button type="button" className="btn btn-info btn-xs smallOffsetLeft">
                                            <span className="glyphicon glyphicon-backward"/>
                                            Назад
                                        </button>
                                    </td>
                                    <td style={{verticalAlign: 'top'}} align="left">
                                        <div className="smallOffsetLeft">
                                            Журнал устройства
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="pull-left">
                                <button type="button" className="btn btn-info btn-xs smallOffsetLeft"
                                        id="gwt-debug-journaling-refresh-button">
                                    <span className="glyphicon glyphicon-refresh"/>
                                    Обновить
                                </button>
                            </div>
                            <div className="btn-group pull-right smallOffsetRight">
                                <div className="btn btn-xs btn-default"
                                     id="gwt-debug-journaling-quick-filter-auth-src-btn">
                                <span className="hide">
                                    <input value="on" id="gwt-uid-727" tabIndex="0" type="checkbox"/>
                                </span>
                                    <span>Авторизация</span>
                                </div>
                                <div className="btn btn-xs btn-default"
                                     id="gwt-debug-journaling-quick-filter-node-btn">
                                    <span className="hide">
                                        <input value="on" id="gwt-uid-730" tabIndex="0" type="checkbox"/>
                                </span>
                                    <span>События узлов</span>
                                </div>
                                <div className="btn btn-xs btn-default"
                                     id="gwt-debug-journaling-quick-filter-database-btn">
                                <span className="hide"><input value="on" id="gwt-uid-733" tabIndex="0" type="checkbox"/>
                                </span>
                                    <span>Состояние БД</span></div>
                                <div className="btn btn-xs btn-default"
                                     id="gwt-debug-journaling-quick-filter-objects-btn">
                                    <span className="hide"><input value="on" id="gwt-uid-736" tabIndex="0"
                                                                  type="checkbox"/>
                                </span>
                                    <span>События объектов</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps)(Journals);
