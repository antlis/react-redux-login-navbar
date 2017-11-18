import * as React from "react";
import JournalsList from './journalsList';

export class JournalsTable extends React.Component {
    render() {
        return (
            <div className="panel-body">
                <div className="table table-hover journal fixed-row" id="gwt-debug-journaling-table">
                    <div className="table-container">
                        <table className="table">
                            <thead className="">
                            <tr>
                                <th>Время</th>
                                <th>Тип</th>
                                <th>Источник</th>
                                <th>Результат</th>
                                <th style={{width: '15%'}}>Параметры</th>
                            </tr>
                            </thead>
                            <JournalsList/>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}