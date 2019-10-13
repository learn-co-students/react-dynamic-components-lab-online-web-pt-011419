import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    let opc = this.props.opacity
    return (
      <div className="color-box" style={{opacity: opc}}>
          {(opc > 0.2 ? <ColorBox opacity={opc -= 0.1}/>: null)}
      </div>
    )
  }
  
}
