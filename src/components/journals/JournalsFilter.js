import React from "react";
import {connect} from "react-redux";
import {journalActions} from "../../actions/journalsActions";
import {Button} from "react-bootstrap";
import moment from "moment";
import DatePicker from "../common/DatePicker";

class JournalsFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: moment().startOf('day').format('DD.MM.YYYY HH:mm') + ' - ' + moment().endOf('day').format('DD.MM.YYYY HH:mm'),
            error: false
        };
        this.onDatesChange = this.onDatesChange.bind(this);
    }

    onApplyClicked() {
        let filter = this.createFilter();
        if (!filter) {
            this.setState({
                error: true
            });
            return;
        }
        this.props.dispatch(journalActions.loadJournals(filter));
        this.props.toggleFilter();
    }

    createFilter() {
        let splitDates = this.state.dates.split("-");
        let startDate = moment(splitDates[0].trim(), 'DD.MM.YYYY HH:mm', true);
        let endDate = moment(splitDates[1].trim(), 'DD.MM.YYYY HH:mm', true);
        if (!startDate.isValid() || !endDate.isValid()) {
            return false;
        }
        return {
            startDate: startDate.unix(),
            stopDate: endDate.unix(),
            limit: 50,
            offset: 0
        };
    }

    onDatesChange(e) {
        let dates = e.target.value;
        this.setState({dates});
    }

    render() {
        const lang = this.props.content.page;
        const {error} = this.state;
        return (
            <div style={{visibility: 'visible', position: 'absolute', overflow: 'visible'}} className="gwt-PopupPanel">
                <div className="filter-popup animated fadeIn" style={{width: 600}}>
                    <div className="row">
                        <div className="col-xs-12">
                            <label className='form-label' style={{color: error ? 'red' : ''}}>
                                {lang.journals.filter.SamplingPeriod}{error ? "*" : ""}
                            </label>
                            <DatePicker dates={this.state.dates} onChange={this.onDatesChange}/>
                        </div>
                        <div className="form-group col-xs-6">
                            <label>
                                {lang.journals.filter.SourceId}
                            </label>
                            <div>
                                <input className="form-control" onChange={() => Console.log('input')}
                                       id="gwt-debug-journaling-filter-source-id"
                                       type="text"/>
                            </div>
                        </div>
                        <div className="form-group col-xs-6" id="gwt-debug-journaling-object-type">
                            <label>
                                {lang.journals.filter.ObjType}
                            </label>
                            <div className="btn-group btn-group-selector">
                                <button type="button" className="btn btn-white" style={{marginTop: 0}}>
                                    {lang.common.user}
                                </button>
                                <span className="input-group-btn">
                                            <button type="button" className="btn btn-default" style={{marginTop: 0}}>
                                                <span className="caret"/>
                                            </button>
                                </span>
                            </div>
                        </div>
                        <div className="form-group col-xs-12 fix-col-xs-12" id="gwt-debug-journaling-event-category">
                            <label>{lang.journals.filter.SourceType}</label>
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
                                        id="gwt-debug-filter-apply-button">
                                    {lang.common.apply}
                                </Button>
                                <Button onClick={this.props.toggleFilter} type="button"
                                        className="btn btn-sm btn-default"
                                        id="gwt-debug-filter-cancel-button">
                                    {lang.common.cancel}
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
    const {journalsFilter} = state;
    return {
        content,
        journalsFilter
    };
}

export default connect(mapStateToProps)(JournalsFilter)