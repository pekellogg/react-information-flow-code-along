import React, { Component } from 'react';
import { getRandomColor } from './randomColorGenerator.js';
import Child from './Child';

export default class Parent extends Component {

  constructor() {
    super();
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }
  };

  changeColor = (newKiddo) => {
    this.setState(
      {
        color: getRandomColor(),
        childrenColor: newKiddo
      }
    )
  }

  render() {
    return (
      <div
        className="parent"
        style={ { backgroundColor: this.state.color } }
      >

          <Child
            color={ this.state.childrenColor }
            handleColorChange={ this.changeColor }
          />

          <Child
            color={ this.state.childrenColor }
            handleColorChange={ this.changeColor }
          />

      </div>
    );
  };

}