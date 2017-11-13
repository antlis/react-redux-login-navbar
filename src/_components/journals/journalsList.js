
import {journalActions} from "../../_actions/journalsActions";
import {connect} from "react-redux";
import React from "react";

class JournalsList extends React.Component {

    loadMore() {
        this.props.dispatch(journalActions.getAll(0, 50));
    }

   /* renderJournals() {
        return _.map(this.props.journals, (journal) => {
            return (
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
            )
        })
    }
*/
    render() {
        return (
       {/*     <InfiniteScroll
                items={this.renderJournals.bind(this)}
                loadMore={this.loadMore.bind(this)}
            />*/}
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

export default connect(mapStateToProps)(JournalsList);