import React from "react";

export const RowInfo = ({journal}) => {
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