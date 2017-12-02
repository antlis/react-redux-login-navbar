import React from "react";
import {connect} from "react-redux";
import {journalActions} from "../../actions/journalsActions";
import {Button} from "react-bootstrap";
import moment from "moment";
import DatePicker from "../common/DatePicker";
import {journalConstants} from "../../constants/journalContstants";


const dates = moment().startOf('day').format('DD.MM.YYYY HH:mm') + ' - ' + moment().endOf('day').format('DD.MM.YYYY HH:mm');

class JournalsFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: dates,
        };
        this.onDatesChange = this.onDatesChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    onApplyClicked() {
        let filter = this.createFilter();
        if (filter) {
            this.props.loadJournals(filter);
            this.props.toggleFilter();
        }
    }

    createFilter() {
        if (this.dateIsValid()) {
            let splitDates = this.state.dates.split(" - ");
            let startDate = moment(splitDates[0], 'DD.MM.YYYY HH:mm', true);
            let endDate = moment(splitDates[1], 'DD.MM.YYYY HH:mm', true);

            return {
                startDate: startDate.unix(),
                stopDate: endDate.unix(),
                limit: journalConstants.PAGE_SIZE,
                offset: 0
            };
        }
    }

    onDatesChange(e) {
        let dates = e.target.value;
        this.setState({dates});
    }

    handleSelect(range) {
        let dates = range.startDate.format('DD.MM.YYYY HH:mm') + " - " + range.endDate.format('DD.MM.YYYY HH:mm');
        this.setState({dates});
    }

    dateIsValid() {
        return moment(this.state.dates, 'DD.MM.YYYY HH:mm - DD.MM.YYYY HH:mm', true).isValid();
    }

    render() {
        const lang = this.props.page;
        return (
            <div style={{visibility: 'visible', position: 'absolute', overflow: 'visible'}} className="gwt-PopupPanel">
                <div className="filter-popup animated fadeIn" style={{width: 600}}>
                    <div className="row">
                        <div className="col-xs-12">
                            <label className='form-label'>
                                {lang.journals.filter.SamplingPeriod}
                            </label>
                            <div className={this.dateIsValid() ? '' : 'has-error'}>
                                <DatePicker dates={this.state.dates}
                                            onChange={this.onDatesChange}
                                            onSelect={this.handleSelect}
                                />
                            </div>
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
                            <div className="btn-group btn-group-selector">
                                <button type="button" className="btn btn-white" style={{marginTop: 0}}>
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
                        <div className="form-group col-xs-12 pull-right">
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
    const {page} = state.translate.content;
    const {journalsFilter} = state;
    return {
        page,
        journalsFilter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadJournals: (filter) => dispatch(journalActions.loadJournals(filter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(JournalsFilter)