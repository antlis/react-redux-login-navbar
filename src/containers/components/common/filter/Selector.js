import React from "react";
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

    itemClick(name, value) {
        this.props.onChange(name, value);
        this.toggle();
    }

    render() {
        let list = this.props.items.map((item) => {
            let boundItemClick = this.itemClick.bind(this, this.props.name, item);
            return <li style={{padding: '5px 15px'}} key={item} onClick={boundItemClick}>{item}</li>

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
                    {
                        this.state.isOpen &&
                        <ul className="dropdown-menu dropdown-menu-right"
                            style={{display: 'block', width: '100%'}}>
                            {list}
                        </ul>
                    }
                </div>
            </div>
        )
    }
}

Selector.propTypes = {
    items: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};