import React from "react";
import JournalsFilter from "./JournalsFilter";
import {Button, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {connect} from "react-redux";
import {ClipLoader} from "react-spinners";
import {journalConstants} from "../../../constants/index";
import {journalsActions} from "../../../actions/index";

class JournalsHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterIsOpen: false,
        };
        this.toggleFilter = this.toggleFilter.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    toggleFilter() {
        this.setState({
            filterIsOpen: !this.state.filterIsOpen
        });
    }

    refresh(filter) {
        const {loadJournals} = this.props;
        filter.offset = 0;
        loadJournals(filter);
    }

    render() {
        const {filter, quickFilter, lang, quickFilterChange, loading} = this.props;
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
                        <Button type="button" className="btn-info btn-xs smallOffsetLeft"
                                id="gwt-debug-journaling-refresh-button"
                                onClick={() => this.refresh(filter)}
                                disabled={loading}>
                            <span className="glyphicon glyphicon-refresh"/>
                            {lang.refresh}
                        </Button>
                    </div>
                    <div style={{marginLeft: 10, marginRight: 10, float: 'left'}}>
                        {loading ? <ClipLoader size={18} color='#49b6d6'/> : ""}
                    </div>
                    <div className="btn-group pull-right smallOffsetRight">
                        <ToggleButtonGroup type="checkbox" value={quickFilter} onChange={quickFilterChange}>
                            <ToggleButton className="btn btn-xs btn-default"
                                          value={journalConstants.AUTH}>{lang.quickFilter.authorization}</ToggleButton>
                            <ToggleButton className="btn btn-xs btn-default"
                                          value={journalConstants.NODE}>{lang.quickFilter.hostEvents}</ToggleButton>
                            <ToggleButton className="btn btn-xs btn-default"
                                          value={journalConstants.DATABASE}>{lang.quickFilter.databaseStatus}</ToggleButton>
                            <ToggleButton className="btn btn-xs btn-default"
                                          value={journalConstants.OBJECT}>{lang.quickFilter.objectEvents}</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const lang = state.translate.content.page.common;
    const {filter, quickFilter, loading} = state.journals;
    return {
        lang,
        filter,
        quickFilter,
        loading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadJournals: (filter) => dispatch(journalsActions.loadJournals(filter)),
        quickFilterChange: (value) => dispatch(journalsActions.quickFilterChange(value))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(JournalsHeader)

