import React, {Component} from 'react'

class newCOmponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Oleg'
    }
  }
  
  render() {
    const {name} = this.state;
    return (
      <div>kek {name}</div>
    );
  }
}

export default newCOmponents;