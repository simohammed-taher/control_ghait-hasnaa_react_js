import React, { Component } from 'react'

export default class DropList extends Component {
    render() {
        return (
            <select onChange={(e) => this.props.onSelectionChange(e.target.value)}>
                {this.props.items.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        );
    }
}

