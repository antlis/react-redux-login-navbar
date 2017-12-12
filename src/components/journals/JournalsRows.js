import {journalsActions} from "../../actions/index";
import React from "react";
import {connect} from "react-redux";
import ReduxInfiniteScroll from "../common/ReduxInfiniteScroll";
import PropTypes from "prop-types";
import {journalConstants} from "../../constants/index";
import {RowInfo} from "./RowInfo";
import moment from "moment";

const pageSize = journalConstants.PAGE_SIZE;
const count = 1000;

class JournalsRows extends React.Component {

    loadMore() {
        const {quickFilter, loadNext, filter} = this.props;
        if (quickFilter.length === 0) {
            loadNext(filter);
        }
    }

    renderJournals() {
        const {rows, quickFilter} = this.props;

        let journalsRows = [];

        rows.filter((journal) => {
            if (quickFilter.length === 0) {
                return true;
            }
            return quickFilter.indexOf(journal.type) !== -1
        }).map((journal, key) => {
            if ((key) % pageSize === 0) {
                let pageNumber = key / pageSize;
                let pageCount = count / pageSize;
                let firstRowNumber = pageNumber * pageSize + 1;
                let lastRowNumber = pageNumber * pageSize + pageSize;

                journalsRows.push(
                    <tr style={{height: 0}} key={key}>
                        <td colSpan="5" className="separator">
                            {`Страница ${pageNumber + 1} из ${pageCount} (Записи ${firstRowNumber} - ${lastRowNumber} из ${count})`}
                        </td>
                    </tr>
                );
            }
            journalsRows.push(
                <tr key={journal.id}>
                    <td>{moment.unix(journal.time).format('DD.MM.YYYY HH:mm:ss')}</td>
                    <td>{journal.type}</td>
                    <td>{journal.source}</td>
                    <td><i className="glyphicon glyphicon-ok-sign activeStatus"
                           data-toggle="tooltip"
                           data-placement="right" title="Успешно"/>
                    </td>
                    <td>
                        <RowInfo journal={journal}/>
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
        loadNext: (filter) => dispatch(journalsActions.loadNext(filter)),
        noMore: (filter) => dispatch(journalsActions.noMore(filter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(JournalsRows);

JournalsRows.propTypes = {
    filter: PropTypes.shape({
        JournalingFilter: PropTypes.shape({
            from: PropTypes.number.isRequired,
            to: PropTypes.number.isRequired,
        }),
        limit: PropTypes.number.isRequired,
        offset: PropTypes.number.isRequired
    }),
};