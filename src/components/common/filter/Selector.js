import React from 'react';
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";

export class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    itemClick(name,value) {
        this.props.onChange(name,value);
        this.toggle();
    }

    render() {
        let list = this.props.items.map((item) => {
            let boundItemClick = this.itemClick.bind(this, this.props.name, item);
            return <li key={item} onClick={boundItemClick}>{item}</li>
        });
        return (
            <div>
                <label>{this.props.label}</label>
                <div className="btn-group btn-group-selector">
                    <Button onClick={this.toggle} className="btn-white" style={{marginTop: 0}}>
                        {this.props.value}
                    </Button>
                    <span className="input-group-btn">
                        <Button onClick={this.toggle} style={{marginTop: 0}}>
                           <span className="caret"/>
                        </Button>
                    </span>
                </div>
                {
                    this.state.isOpen &&
                    <ul role="menu" className="dropdown-menu"
                        style={{display: 'block', width: '96.5%', marginLeft: 10}}>
                        {list}
                    </ul>
                }
            </div>
        )
    }
}

Selector.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};