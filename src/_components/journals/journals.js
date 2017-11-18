import React from "react";
import {connect} from "react-redux";
import {JournalsTable} from "./journalsTable";
import JournalsHeader from "./JournalsHeader";

class Journals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: false
        };
    }

    render() {
        const {items} = this.props.journals;
        return (
            <div className="main-content">
                <div className="panel panel-default">
                    <JournalsHeader/>
                    {items.length !== 0 && <JournalsTable/>}
                </div>
            </div>

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

export default connect(mapStateToProps)(Journals);
