import React from "react";
import JournalsFilter from "./JournalsFilter";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";

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
                        <button type="button" className="btn btn-info btn-xs smallOffsetLeft"
                                id="gwt-debug-journaling-refresh-button">
                            <span className="glyphicon glyphicon-refresh"/>
                            {lang.refresh}
                        </button>
                    </div>
                    <div className="btn-group pull-right smallOffsetRight">
                        <div className="btn btn-xs btn-default"
                             id="gwt-debug-journaling-quick-filter-auth-src-btn">
                                <span className="hide">
                                    <input value="on" id="gwt-uid-727" tabIndex="0" type="checkbox"/>
                                </span>
                            <span>{lang.quickFilter.authorization}</span>
                        </div>
                        <div className="btn btn-xs btn-default"
                             id="gwt-debug-journaling-quick-filter-node-btn">
                                    <span className="hide">
                                        <input value="on" id="gwt-uid-730" tabIndex="0" type="checkbox"/>
                                </span>
                            <span>{lang.quickFilter.hostEvents}</span>
                        </div>
                        <div className="btn btn-xs btn-default"
                             id="gwt-debug-journaling-quick-filter-database-btn">
                                <span className="hide"><input value="on" id="gwt-uid-733" tabIndex="0" type="checkbox"/>
                                </span>
                            <span>{lang.quickFilter.databaseStatus}</span></div>
                        <div className="btn btn-xs btn-default"
                             id="gwt-debug-journaling-quick-filter-objects-btn">
                                    <span className="hide"><input value="on" id="gwt-uid-736" tabIndex="0"
                                                                  type="checkbox"/>
                                </span>
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
    const {journalsFilter} = state;
    return {
        lang,
        journalsFilter
    };
}

export default connect(mapStateToProps)(JournalsHeader)

