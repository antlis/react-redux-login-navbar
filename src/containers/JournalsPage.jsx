import React from "react";
import JournalsTable from "./components/journals/JournalsTable";
import JournalsHeader from "./components/journals/JournalsHeader";

export const Journals = () => {
        return (
            <div className="main-content">
                <div className="panel panel-default">
                    <JournalsHeader/>
                    <JournalsTable/>
                </div>
            </div>
        )
};
