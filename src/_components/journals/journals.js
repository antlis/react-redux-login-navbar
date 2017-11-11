import React from 'react';
import {connect} from 'react-redux';
import {Button} from "react-bootstrap";
import {Filter} from "./filter";
import {journalActions} from "../../_actions/journalsActions";


class Journals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: false
        };
        this.showFilter = this.showFilter.bind(this);
    }

    showFilter() {
        this.setState({filter: !this.state.filter})
    }

    componentDidMount() {
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
                                {this.state.filter && <Filter/>}
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
                            <div className="scroller left"/>
                            <div className="scroller right"/>
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
                                    <tbody>
                                    <tr style={{height: 0}}/>
                                    <tr>
                                        <td colSpan="5" className="separator">Страница 1 из 2675 (Записи 1 — 30 из
                                            80324)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>25.10.2017 12:28:50</div>
                                        </td>
                                        <td>
                                            <div>Запрос 2.4 Просмотр списка реализованных запросов на получение
                                                служебной
                                                информации
                                            </div>
                                        </td>
                                        <td>Пользователь superadmin(#1)</td>
                                        <td><i className="glyphicon glyphicon-ok-sign activeStatus"
                                               data-toggle="tooltip"
                                               data-placement="right" title="Успешно"/></td>
                                        <td>
                                            <div className="journaling-params"><a href="#">Параметры объекта</a>
                                                <form className="form-horizontal">
                                                    <div className="form-group" style={{marginBottom: 0}}><label
                                                        className="col-sm-6 control-label">Объект</label>
                                                        <div className="col-sm-6">
                                                            <div className="break">Запрос СИ (id=0)</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group" style={{marginBottom: 0}}><label
                                                        className="col-sm-6 control-label">Пользователь</label>
                                                        <div className="col-sm-6">
                                                            <div className="break">superadmin (id=1)</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group" style={{marginBottom: 0}}><label
                                                        className="col-sm-6 control-label">Тип</label>
                                                        <div className="col-sm-6">
                                                            <div className="break">Запрос 2.4 Просмотр списка
                                                                реализованных
                                                                запросов на получение служебной информации
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>25.10.2017 12:28:44</div>
                                        </td>
                                        <td>
                                            <div>Запрос 2.4 Просмотр списка реализованных запросов на получение
                                                служебной
                                                информации
                                            </div>
                                        </td>
                                        <td>Пользователь superadmin(#1)</td>
                                        <td><i className="glyphicon glyphicon-ok-sign activeStatus"
                                               data-toggle="tooltip"
                                               data-placement="right" title="Успешно"/></td>
                                        <td>
                                            <div className="journaling-params"><a href="#">Параметры объекта</a>
                                                <form className="form-horizontal">
                                                    <div className="form-group" style={{marginBottom: 0}}><label
                                                        className="col-sm-6 control-label">Объект</label>
                                                        <div className="col-sm-6">
                                                            <div className="break">Запрос СИ (id=0)</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group" style={{marginBottom: 0}}><label
                                                        className="col-sm-6 control-label">Пользователь</label>
                                                        <div className="col-sm-6">
                                                            <div className="break">superadmin (id=1)</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group" style={{marginBottom: 0}}><label
                                                        className="col-sm-6 control-label">Тип</label>
                                                        <div className="col-sm-6">
                                                            <div className="break">Запрос 2.4 Просмотр списка
                                                                реализованных
                                                                запросов на получение служебной информации
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>25.10.2017 12:28:43</div>
                                        </td>
                                        <td>
                                            <div>Запрос 1.14 Проверка технического состояния оборудования</div>
                                        </td>
                                        <td>Пользователь superadmin2(#34)</td>
                                        <td><i className="glyphicon glyphicon-ok-sign activeStatus"
                                               data-toggle="tooltip"
                                               data-placement="right" title="Успешно"/></td>
                                        <td>
                                            <div className="journaling-params"><a href="#">Параметры объекта</a>
                                                <form className="form-horizontal">
                                                    <div className="form-group" style={{marginBottom: 0}}><label
                                                        className="col-sm-6 control-label">Объект</label>
                                                        <div className="col-sm-6">
                                                            <div className="break">Система (id=0)</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group" style={{marginBottom: 0}}><label
                                                        className="col-sm-6 control-label">Пользователь</label>
                                                        <div className="col-sm-6">
                                                            <div className="break">superadmin2 (id=34)</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group" style={{marginBottom: 0}}><label
                                                        className="col-sm-6 control-label">Тип</label>
                                                        <div className="col-sm-6">
                                                            <div className="break">Запрос 1.14 Проверка технического
                                                                состояния
                                                                оборудования
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>25.10.2017 12:28:43</div>
                                        </td>
                                        <td>
                                            <div>Запрос 1.4 Просмотр списка администраторов, обработчиков, надзорщиков
                                            </div>
                                        </td>
                                        <td>Пользователь superadmin2(#34)</td>
                                        <td><i className="glyphicon glyphicon-ok-sign activeStatus"
                                               data-toggle="tooltip"
                                               data-placement="right" title="Успешно"/></td>
                                        <td>
                                            <div className="journaling-params"><a href="#">Параметры объекта</a>
                                                <form className="form-horizontal">
                                                    <div className="form-group" style={{marginBottom: 0}}><label
                                                        className="col-sm-6 control-label">Объект</label>
                                                        <div className="col-sm-6">
                                                            <div className="break">Пользователь</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group" style={{marginBottom: 0}}><label
                                                        className="col-sm-6 control-label">Пользователь</label>
                                                        <div className="col-sm-6">
                                                            <div className="break">superadmin2 (id=34)</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group" style={{marginBottom: 0}}><label
                                                        className="col-sm-6 control-label">Тип</label>
                                                        <div className="col-sm-6">
                                                            <div className="break">Запрос 1.4 Просмотр списка
                                                                администраторов,
                                                                обработчиков, надзорщиков
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
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
    const {content} = state.translate;
    return {
        content
    };
}

export default connect(mapStateToProps)(Journals);
