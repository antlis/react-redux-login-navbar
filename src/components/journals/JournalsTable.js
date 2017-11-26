import * as React from "react";
import JournalsRows from './JournalsRows';
import {connect} from "react-redux";

class JournalsTable extends React.Component {
    render() {
        const {lang, rows} = this.props;
        return (
            <div className="panel-body">
                <div className="table table-hover journal fixed-row" id="gwt-debug-journaling-table">
                    <div className="table-container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>{lang.time}</th>
                                <th>{lang.type}</th>
                                <th>{lang.source}</th>
                                <th>{lang.result}</th>
                                <th>{lang.params}</th>
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
    const lang = state.translate.content.page.table;
    const {rows} = state.journals;
    return {
        lang,
        rows
    };
}

export default connect(mapStateToProps)(JournalsTable);