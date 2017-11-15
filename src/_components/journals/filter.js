import React from 'react';

export class Filter extends React.Component {
    render() {
        return (
            <div style={{visibility: 'visible', position: 'absolute', overflow: 'visible'}} className="gwt-PopupPanel">
                    <div className="filter-popup animated fadeIn" style={{width: 600}}>
                        <div className="row">
                            <div className="col-xs-12">
                                <label className="form-label">
                                    Период выборки
                                </label>
                                <div className="form-group" id="gwt-debug-journaling-filter-range-picker">
                                    <div className="input-group date">
                                        <input className="form-control" placeholder="Не задан"
                                               value="25.10.2017 00:00 - 25.10.2017 23:59"
                                               type="text"/>
                                        <div className="input-group-btn">
                                            <button type="button" className="btn btn-default">
                                                <i className="fa fa-calendar"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="control-label range-message" style={{display: 'none'}} aria-hidden="true"/>
                                </div>
                            </div>
                            <div className="form-group col-xs-6">
                                <label>
                                    Идентификатор источника
                                </label>
                                <div>
                                    <input className="form-control" id="gwt-debug-journaling-filter-source-id"
                                           type="text"/>
                                    <div id="gwt-debug-journaling-filter-source-id-selector" style={{display: 'none'}}
                                         aria-hidden="true">
                                        <label style={{display: 'none'}} aria-hidden="true"/>
                                        <label className="required-field-indicator hide">*</label>
                                        <div className="btn-group btn-group-selector">
                                            <button type="button" className="btn btn-white"/>
                                            <span className="input-group-btn">
                                                <button type="button" className="btn btn-default">
                                                <span className="caret"/>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-xs-6">
                                <div id="gwt-debug-journaling-object-type">
                                    <label>Тип объекта</label>
                                    <label className="required-field-indicator hide">*</label>
                                    <div className="btn-group btn-group-selector">
                                        <button type="button" className="btn btn-white">
                                            Пользователь
                                        </button>
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-default">
                                                <span className="caret"/>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-xs-12 fix-col-xs-12" id="gwt-debug-journaling-event-category">
                                <label>Категория события</label>
                                <label className="required-field-indicator hide">*</label>
                                <div className="btn-group btn-group-selector">
                                    <button type="button" className="btn btn-white">
                                        Любая
                                    </button>
                                    <span className="input-group-btn">
                                            <button type="button" className="btn btn-default">
                                                  <span className="caret"/>
                                            </button>
                                        </span>
                                </div>
                            </div>
                            <div className="form-group col-xs-12">
                                <span className="checkbox" id="gwt-debug-filters-successful-pings-checkbox">
                                    <input value="on" id="gwt-debug-filters-successful-pings-checkbox-input"
                                           tabIndex="0" type="checkbox"/>
                            </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-xs-12">
                                <div className="pull-right">
                                    <button onClick={this.props.loadJournals} type="button" className="btn btn-sm btn-primary"
                                            id="gwt-debug-journaling-filter-apply-button">
                                        Применить
                                    </button>
                                    <button type="button" className="btn btn-sm btn-default"
                                            id="gwt-debug-journaling-filter-cancel-button">
                                        Отмена
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}