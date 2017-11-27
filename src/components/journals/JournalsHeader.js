import React from "react";
import JournalsFilter from "./JournalsFilter";
import {Button, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {connect} from "react-redux";
import {journalActions} from "../../actions/journalsActions";

class JournalsHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterIsOpen: false,
            value: []
        };
        this.toggleFilter = this.toggleFilter.bind(this);
    }

    toggleFilter() {
        this.setState({
            filterIsOpen: !this.state.filterIsOpen
        });
    }

    onChange(value) {
        this.setState({value});
    };

    render() {
        const {filter, lang} = this.props;
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
                                onClick={() => this.props.loadJournals(filter)}>
                            <span className="glyphicon glyphicon-refresh"/>
                            {lang.refresh}
                        </Button>
                    </div>
                    <div className="btn-group pull-right smallOffsetRight">
                        <ToggleButtonGroup
                            type="checkbox"
                            value={this.state.value}
                            onChange={this.onChange.bind(this)}>
                            <ToggleButton className="btn btn-xs btn-default"
                                          value={1}>{lang.quickFilter.authorization}</ToggleButton>
                            <ToggleButton className="btn btn-xs btn-default"
                                          value={2}>{lang.quickFilter.hostEvents}</ToggleButton>
                            <ToggleButton className="btn btn-xs btn-default"
                                          value={3}>{lang.quickFilter.databaseStatus}</ToggleButton>
                            <ToggleButton className="btn btn-xs btn-default"
                                          value={4}>{lang.quickFilter.objectEvents}</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const lang = state.translate.content.page.common;
    const {filter} = state.journals;
    return {
        lang,
        filter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadJournals: (filter) => dispatch(journalActions.loadJournals(filter))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(JournalsHeader)

