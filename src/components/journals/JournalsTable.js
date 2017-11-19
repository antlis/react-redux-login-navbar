import * as React from "react";
import JournalsRows from './JournalsRows';

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
                            <JournalsRows/>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}