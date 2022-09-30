import React, { Component } from 'react';
import { getRandomColor } from './randomColorGenerator.js';

export default class Child extends Component {
  render() {
    return (
      <div
        // attach listener with hook
        onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={ { backgroundColor: this.props.color } }>
      </div>
    )
  }
}