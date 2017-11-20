import React from "react";
import {connect} from "react-redux";
import JournalsTable from "../components/journals/JournalsTable";
import JournalsHeader from "../components/journals/JournalsHeader";

export default class Journals extends React.Component {
    render() {
        return (
            <div className="main-content">
                <div className="panel panel-default">
                    <JournalsHeader/>
                    <JournalsTable/>
                </div>
            </div>
        )
    }
}
