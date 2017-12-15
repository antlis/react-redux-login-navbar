import React from "react";
import {connect} from "react-redux";
import ReduxInfiniteScroll from "../common/ReduxInfiniteScroll";
import PropTypes from "prop-types";
import {journalConstants} from "../../../constants/index";
import {journalsActions} from "../../../actions/index";
import {addPageInfo, addRows} from "./helpers/RowHelper";

class JournalsRows extends React.Component {

    loadMore() {
        let {quickFilter, loadJournals, filter} = this.props;

        if (quickFilter.length === 0) {
            filter.offset = filter.offset + journalConstants.PAGE_SIZE;
            loadJournals(filter);
        }
    }

    renderJournals() {
        const {rows, quickFilter} = this.props;

        let journalsRows = [];

        rows.filter((journal) => {
            return quickFilter.length === 0 ? true : quickFilter.indexOf(journal.type) !== -1
        }).map((journal, key) => {
            addPageInfo(key, journalsRows);
            addRows(journalsRows, journal);
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
        loadJournals: (filter) => dispatch(journalsActions.loadJournals(filter)),
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