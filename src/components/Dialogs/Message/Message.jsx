import React, { Component } from 'react';
import s from './index.module.css' 
 


class Message extends  Component {
  constructor(props) {
    super(props);

  
  }
 
  render() {
    const {item, id} = this.props;
    return (
      <div className={s.message}>
        <span className={s.messageText}>this message:</span> {item}     
        <div>
        <span className={s.messageId}> this id: </span>{id}
        </div> 
      </div>
    )
  }
}

export default Message;