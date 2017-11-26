import {journalActions} from "../../actions/journalsActions";
import React from "react";
import {connect} from "react-redux";
import ReduxInfiniteScroll from "../ReduxInfiniteScroll";

class JournalsRows extends React.Component {

    loadMore() {
        this.props.dispatch(journalActions.loadNext(this.props.filter));
    }

    renderJournals() {
        let journalsRows = [];
        let items = this.props.items;
        if (items) {
            items.map((journal, key) => {
                if ((key) % 20 === 0) {
                    journalsRows.push(
                        <tr style={{height: 0}}>
                            <td colSpan="5"
                                className="separator">{'Страница ' + (key / 20 + 1) + ' из 2675 (Записи 1 — 30 из 80324)'}
                            </td>
                        </tr>
                    );
                }
                journalsRows.push(
                    <tr>
                        <td>
                            <div>{journal.time}</div>
                        </td>
                        <td>
                            <div>{journal.type}</div>
                        </td>
                        <td>{journal.source}</td>
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
                                    <div className="form-group" style={{marginBottom: 0}}>
                                        <label className="col-sm-6 control-label">Пользователь</label>
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
                )
            });
        }
        return journalsRows;
    }

    render() {
        return (
            <ReduxInfiniteScroll items={this.renderJournals()}
                                 loadMore={this.loadMore.bind(this)}
                                 holderType='tbody'
            />
        )
    }
}

function mapStateToProps(state) {
    const {items, filter} = state.journals;
    const {lang} = state.translate;
    return {
        lang,
        items,
        filter
    };
}

export default connect(mapStateToProps)(JournalsRows);