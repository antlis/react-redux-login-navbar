import React from "react";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import {Filter} from "./filter";
import JournalsList from "./journalsList";
import {journalActions} from "../../_actions/journalsActions";

class Journals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: false
        };
        this.showFilter = this.showFilter.bind(this);
        this.loadJournals = this.loadJournals.bind(this);
    }

    showFilter() {
        this.setState({filter: !this.state.filter})
    }

    loadJournals() {
        this.setState({
            filter: false
        });
        this.props.dispatch(journalActions.getAll(0, 50));
    }

    render() {
        return (
            <div className="main-content">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="pull-left">
                                <Button className="btn btn-info btn-xs filterButton"
                                        id="gwt-debug-common-filter-btn" onClick={this.showFilter}>
                                    {'Фильтр '}
                                    <span className="caret"/>
                                </Button>
                                {this.state.filter && <Filter loadJournals={this.loadJournals}/>}
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
                    <div className="panel-body">
                        <div className="table table-hover journal fixed-row" id="gwt-debug-journaling-table">
                            <div className="table-container">
                                <table className="table">
                                    <thead className="">
                                    <tr>
                                        <th>Время</th>
                                        <th>Тип</th>
                                        <th>Источник</th>
                                        <th>Результат</th>
                                        <th style={{width: '15%'}}>Параметры</th>
                                    </tr>
                                    </thead>
                                    <tbody id="journals-wrapper">
                                    <tr style={{height: 0}}/>
                                    <tr>
                                        <td colSpan="5" className="separator">Страница 1 из 2675 (Записи 1 — 30 из 80324)
                                        </td>
                                    </tr>
                                    <JournalsList/>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const {journals} = state;
    const {lang} = state.translate;
    return {
        lang,
        journals
    };
}

export default connect(mapStateToProps)(Journals);
