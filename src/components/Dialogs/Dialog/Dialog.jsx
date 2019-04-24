import React, { Component } from 'react';
import s from './index.module.css' 
import {NavLink} from 'react-router-dom'


class Dialog extends  Component {
  constructor(props) {
    super(props);

  
  }
 
  render() {
    const {number, name} = this.props;
    return (
      <div className={s.item + ' ' + s.active}>
        <NavLink to={`/dialogs/${number}`}>{name}</NavLink>        
      </div>
    )
  }
}

export default Dialog;