import React from "react";
import JournalsFilter from "./JournalsFilter";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {journalActions} from "../../actions/journalsActions";

class JournalsHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterIsOpen: false
        };
        this.toggleFilter = this.toggleFilter.bind(this);
    }

    toggleFilter() {
        this.setState({
            filterIsOpen: !this.state.filterIsOpen
        });
    }

    render() {
        const lang = this.props.lang;
        return (
            <div className="panel-heading">
                <div className="row">
                    <div className="pull-left">
                        <Button className="btn btn-info btn-xs filterButton"
                                id="gwt-debug-common-filter-btn"
                                onClick={this.toggleFilter}>
                            {lang.filter}
                            <span className="caret"/>
                        </Button>
                        {
                            this.state.filterIsOpen && <JournalsFilter toggleFilter={this.toggleFilter}/>
                        }
                    </div>
                    <div className="pull-left">
                        <Button type="button" className="btn btn-info btn-xs smallOffsetLeft"
                                id="gwt-debug-journaling-refresh-button"
                                onClick={() => this.props.dispatch(journalActions.loadJournals(this.props.journals.filter))}>
                            <span className="glyphicon glyphicon-refresh"/>
                            {lang.refresh}
                        </Button>
                    </div>
                    <div className="btn-group pull-right smallOffsetRight">
                        <div className="btn btn-xs btn-default"
                             id="gwt-debug-journaling-quick-filter-auth-src-btn">
                            <span>{lang.quickFilter.authorization}</span>
                        </div>
                        <div className="btn btn-xs btn-default"
                             id="gwt-debug-journaling-quick-filter-node-btn">
                            <span>{lang.quickFilter.hostEvents}</span>
                        </div>
                        <div className="btn btn-xs btn-default"
                             id="gwt-debug-journaling-quick-filter-database-btn">
                            <span>{lang.quickFilter.databaseStatus}</span></div>
                        <div className="btn btn-xs btn-default"
                             id="gwt-debug-journaling-quick-filter-objects-btn">
                            <span>{lang.quickFilter.objectEvents}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const lang = state.translate.content.page.common;
    const {journalsFilter, journals} = state;
    return {
        lang,
        journalsFilter,
        journals
    };
}

export default connect(mapStateToProps)(JournalsHeader)

