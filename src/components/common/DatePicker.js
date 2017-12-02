/**
 * Created by hudyshkin on 23.11.17.
 */
import React from "react";
import PropTypes from "prop-types";
import Popover from "react-bootstrap/es/Popover";
import OverlayTrigger from "react-bootstrap/es/OverlayTrigger";
import {DateRange} from 'react-date-range';

const DatePicker = ({dates, onChange, onSelect}) => {
    const popoverClick =
        <Popover placement='right' id="popover-trigger-click" title="" style={{zIndex:200, maxWidth:'100%'}}>
            <DateRange
                format={'DD.MM.YYYY HH:mm'}
                onChange={onSelect}
            />
        </Popover>;
    return (
        <div className="form-group" id="gwt-debug-journaling-filter-range-picker">
            <div className="input-group date">
                <input className="form-control" onChange={onChange}
                       value={dates}
                       type="text"/>
                <div className="input-group-btn">
                    <OverlayTrigger trigger="click" placement="right" overlay={popoverClick}>
                        <button type="button" className="btn btn-default">
                            <i className="fa fa-calendar"/>
                        </button>
                    </OverlayTrigger>
                </div>

            </div>
        </div>
    );
};

DatePicker.propTypes = {
    dates: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default DatePicker;

