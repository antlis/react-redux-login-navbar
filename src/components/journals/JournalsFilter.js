import React from "react";
import {connect} from "react-redux";
import {journalActions} from "../../actions/journalsActions";
import * as filterActions from "../../actions/filterActions";
import {Button} from "react-bootstrap";
import {DateRangePicker} from "react-dates";
import moment from "moment";
const date = moment();

class JournalsFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment().unix(),
            endDate: moment().unix(),
            focusedInput: 'startDate',
        };
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onApplyClicked() {
        this.props.dispatch(journalActions.getAll(0, 50));
        this.props.dispatch(filterActions.filterClick())
    }

    onDatesChange(e) {
        let dates = e.target.value.split("-");
        let startDate = moment(dates[0],'DD.MM.YYYY hh:mm').unix();
        let endDate = moment(dates[1],'DD.MM.YYYY hh:mm').unix();

        this.setState({startDate, endDate});
    }

    onFocusChange(focusedInput) {
        this.setState({focusedInput});
    }

    render() {
        const filterLang = this.props.content.page.journals.filter;
        const commonLang = this.props.content.page.common;
        const {focusedInput, startDate, endDate} = this.state;

        return (
            <div style={{visibility: 'visible', position: 'absolute', overflow: 'visible'}} className="gwt-PopupPanel">
                <div className="filter-popup animated fadeIn" style={{width: 600}}>
                    <div className="row">
                        <div className="col-xs-12">
                            <label className="form-label">
                                {filterLang.SamplingPeriod}
                            </label>
                            <div className="form-group" id="gwt-debug-journaling-filter-range-picker">
                                <div className="input-group date">
                                    <input className="form-control" onChange={this.onDatesChange}
                                           placeholder="Не задан"
                                           value= {moment(startDate).format('DD.MM.YYYY hh:mm') + " - " + moment(endDate).format('DD.MM.YYYY hh:mm')}
                                           type="text"/>
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-default">
                                            <i className="fa fa-calendar"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="control-label range-message" style={{display: 'none'}}
                                     aria-hidden="true"/>
                            </div>
                        </div>
                        <div className="form-group col-xs-6">
                            <label>
                                {filterLang.SourceId}
                            </label>
                            <div>
                                <input className="form-control" onChange={() => Console.log('input')}
                                       id="gwt-debug-journaling-filter-source-id"
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
                        <div className="form-group col-xs-6" id="gwt-debug-journaling-object-type">
                            <label>
                                {filterLang.ObjType}
                            </label>
                            <label className="required-field-indicator hide">*</label>
                            <div className="btn-group btn-group-selector">
                                <button type="button" className="btn btn-white">
                                    {commonLang.user}
                                </button>
                                <span className="input-group-btn">
                                            <button type="button" className="btn btn-default">
                                                <span className="caret"/>
                                            </button>
                                </span>
                            </div>
                        </div>
                        <div className="form-group col-xs-12 fix-col-xs-12" id="gwt-debug-journaling-event-category">
                            <label>{filterLang.SourceType}</label>
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
                                    <label>Отображать успешный пинг</label>
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-xs-12">
                            <div className="pull-right">
                                <Button onClick={() => this.onApplyClicked()} type="button"
                                        className="btn btn-sm btn-primary"
                                        id="gwt-debug-journaling-filter-apply-button">
                                    {commonLang.apply}
                                </Button>
                                <Button onClick={() => this.props.dispatch(filterActions.filterClick())} type="button"
                                        className="btn btn-sm btn-default"
                                        id="gwt-debug-journaling-filter-cancel-button">
                                    {commonLang.cancel}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {content} = state.translate;
    return {
        content
    };
}

export default connect(mapStateToProps)(JournalsFilter)