import {journalConstants} from "../../../../constants/index";
import * as React from "react";
import moment from "moment";

const pageSize = journalConstants.PAGE_SIZE;
const count = 1000;


export const addPageInfo = (key, journalsRows) => {
    if (key % pageSize === 0) {
        let pageNumber = key / pageSize;
        let pageCount = count / pageSize;
        let firstRowNumber = pageNumber * pageSize + 1;
        let lastRowNumber = pageNumber * pageSize + pageSize;

        journalsRows.push(
            <tr style={{height: 0}} key={key}>
                <td colSpan="5" className="separator">
                    {`Страница ${pageNumber + 1} из ${pageCount} (Записи ${firstRowNumber} - ${lastRowNumber} из ${count})`}
                </td>
            </tr>
        );
    }
};

export const addRows = (journalsRows, journal) => {
    journalsRows.push(
        <tr key={journal.id}>
            <td>{moment.unix(journal.time).format('DD.MM.YYYY HH:mm:ss')}</td>
            <td>{journal.type}</td>
            <td>{journal.source}</td>
            <td><i className="glyphicon glyphicon-ok-sign activeStatus"
                   data-toggle="tooltip"
                   data-placement="right" title="Успешно"/>
            </td>
            <td>
                <RowInfo journal={journal}/>
            </td>
        </tr>
    )
};

const RowInfo = ({journal}) => {
    return (
        <div className="journaling-params"><a href="#">Параметры объекта</a>
            <form className="form-horizontal">
                <div className="form-group"><label
                    className="col-sm-6 control-label">Объект</label>
                    <div className="col-sm-6">
                        <div className="break">Запрос СИ (id=0)</div>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-6 control-label">Пользователь</label>
                    <div className="col-sm-6">
                        <div className="break">superadmin (id=1)</div>
                    </div>
                </div>
                <div className="form-group"><label
                    className="col-sm-6 control-label">Тип</label>
                    <div className="col-sm-6">
                        <div className="break">Запрос 2.4 Просмотр списка
                            реализованных
                            запросов на получение служебной информации
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};