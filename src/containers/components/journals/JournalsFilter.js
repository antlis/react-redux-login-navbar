import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import moment from "moment";
import DatePicker from "../common/DatePicker";
import {Selector} from "../common/filter/Selector";
import {dateFormat, journalConstants} from "../../../constants/index";
import {journalsActions} from "../../../actions/index";


const srcTypes = ['1', '2', '3', '4'];
const objTypes = ['Пользователь', 'Любая'];
const dates = moment().startOf('day').format(dateFormat) + ' - ' + moment().endOf('day').format(dateFormat);

class JournalsFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: dates,
            srcType: 'Любая',
            objType: 'Пользователь'
        };
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onRangeChange = this.onRangeChange.bind(this);
    }

    onApplyClicked() {
        if (this.dateIsValid()) {
            let filter = this.createFilter();
            this.props.loadJournals(filter, true);
            this.props.toggleFilter();
        }
    }

    dateIsValid() {
        return moment(this.state.dates, dateFormat + " - " + dateFormat, true).isValid();
    }

    onDatesChange(e) {
        let dates = e.target.value;
        this.setState({dates});
    }

    createFilter() {
        let splitDates = this.state.dates.split(" - ");
        let startDate = moment(splitDates[0], dateFormat, true);
        let endDate = moment(splitDates[1], dateFormat, true);
        return {
            journalsFilter: {
                srcId: "",
                srcType: this.state.srcType,
                from: startDate.unix(),
                to: endDate.unix(),
                id: null,
                showSuccessfulPings: false,
                includeAllRelatedEvents: false,
            },
            limit: journalConstants.PAGE_SIZE,
            offset: 0
        };

    }

    onSelectChange(name, value) {
        this.setState({[name]: value});
    }

    onRangeChange(range) {
        let dates = range.startDate.format(dateFormat) + " - " + range.endDate.format(dateFormat);
        this.setState({dates});
    }

    render() {
        const {lang} = this.props;
        const {objType, srcType} = this.state;
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
                                            onSelect={this.onRangeChange}
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
                            <Selector label={lang.journals.filter.ObjType}
                                      name={'objType'}
                                      value={objType}
                                      items={objTypes}
                                      onChange={this.onSelectChange}/>
                        </div>
                        <div className="form-group col-xs-12 fix-col-xs-12" id="gwt-debug-journaling-event-category">
                            <Selector label={lang.journals.filter.SourceType}
                                      name={'srcType'}
                                      value={srcType}
                                      items={srcTypes}
                                      onChange={this.onSelectChange}/>
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
    const lang = state.translate.content.page;
    const {journalsFilter} = state;
    return {
        lang,
        journalsFilter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadJournals: (filter) => dispatch(journalsActions.loadJournals(filter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(JournalsFilter)

JournalsFilter.propTypes = {
    loadJournals: PropTypes.func.isRequired,
    lang: PropTypes.object.isRequired,
    toggleFilter: PropTypes.func.isRequired
};