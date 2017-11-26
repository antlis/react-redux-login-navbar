import * as React from "react";
import JournalsRows from './JournalsRows';
import {connect} from "react-redux";

class JournalsTable extends React.Component {
    render() {
        const {rows} = this.props.journals;
        const {table} = this.props.content.page;
        return (
            <div className="panel-body">
                <div className="table table-hover journal fixed-row" id="gwt-debug-journaling-table">
                    <div className="table-container">
                        <table className="table">
                            <thead className="">
                            <tr>
                                <th>{table.time}</th>
                                <th>{table.type}</th>
                                <th>{table.source}</th>
                                <th>{table.result}</th>
                                <th>{table.params}</th>
                            </tr>
                            </thead>
                            {rows.length !== 0 && <JournalsRows/>}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {content} = state.translate;
    const {journals} = state;
    return {
        content,
        journals
    };
}

export default connect(mapStateToProps)(JournalsTable);