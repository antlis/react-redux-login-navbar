/**
 * Created by hudyshkin on 23.11.17.
 */
import React from "react";
import PropTypes from "prop-types";

const DatePicker = ({dates, onChange}) => {
    return (
        <div className="form-group" id="gwt-debug-journaling-filter-range-picker">
            <div className="input-group date">
                <input className="form-control" onChange={onChange}
                       value={dates}
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
    );
};

DatePicker.propTypes = {
    dates: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default DatePicker;

