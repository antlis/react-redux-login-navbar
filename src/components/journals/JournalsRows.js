import {journalActions} from "../../actions/journalsActions";
import React from "react";
import {connect} from "react-redux";
import ReduxInfiniteScroll from "../ReduxInfiniteScroll";
import PropTypes from "prop-types";
import {journalConstants} from "../../constants/journalContstants";

class JournalsRows extends React.Component {

    loadMore() {
        const {quickFilter, loadNext, filter} = this.props;
        if (quickFilter.length === 0) {
            loadNext(filter);
        }
    }

    renderJournals() {
        let journalsRows = [];
        const {rows, quickFilter} = this.props;

        rows.filter((journal) => {
            if (quickFilter.length === 0) {
                return true;
            }
            return quickFilter.indexOf(journal.type) !== -1
        }).map((journal, key) => {
            if ((key) % journalConstants.PAGE_SIZE === 0) {
                journalsRows.push(
                    <tr style={{height: 0}} key={key}>
                        <td colSpan="5"
                            className="separator">{'Страница ' + (key / journalConstants.PAGE_SIZE + 1) + ' из 2675 (Записи 1 — 30 из 80324)'}
                        </td>
                    </tr>
                );
            }
            journalsRows.push(
                <tr key={journal.id}>
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
                                <div className="form-group"><label
                                    className="col-sm-6 control-label">Объект</label>
                                    <div className="col-sm-6">
                                        <div className="break">Запрос СИ (id=0)</div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-6 control-label">Пользователь</label>
                                    <div className="col-sm-6">
                                        <div className="break">superadmin (id=1)</div>
                                    </div>
                                </div>
                                <div className="form-group"><label
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
        return journalsRows;
    }

    render() {
        return (
            <ReduxInfiniteScroll items={this.renderJournals()}
                                 loadMore={this.loadMore.bind(this)}
                                 holderType='tbody'
                                 hasMore={this.props.hasMore}
            />
        )
    }
}

function mapStateToProps(state) {
    const {rows, filter, quickFilter, hasMore} = state.journals;
    const {lang} = state.translate;
    return {
        lang,
        rows,
        filter,
        quickFilter,
        hasMore
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadNext: (filter) => dispatch(journalActions.loadNext(filter)),
        noMore: (filter) => dispatch(journalActions.noMore(filter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(JournalsRows);

JournalsRows.propTypes = {
    filter: PropTypes.shape({
        startDate: PropTypes.number.isRequired,
        stopDate: PropTypes.number.isRequired,
        limit: PropTypes.number.isRequired,
        offset: PropTypes.number.isRequired
    }),
    loadNext: PropTypes.func.isRequired
};