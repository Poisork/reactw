import React, { Component } from 'react';
import s from './index.module.css' 
// import {NavLink} from 'react-router-dom'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import Input from '../Form/inputs/input';


  class Dialogs extends  Component {
    constructor(props) {
      super(props);
      this.state = {

      }

    
    }
    render() {
      console.log(this.props)
      const props = this.props
      // const {dialogs,messages,newMessageText,updateNewPostText} = this.props
      const usersItems = props.dialogsPage.dialogs.map((el,i)=> {
        return <Dialog number={el.id} name={el.name} key={i}/>
      })
      const messageItems = props.dialogsPage.messages.map((el,i)=> {
        return <Message item={el.message} id={el.id} key={i}/>
      })
      const postOneBody = props.dialogsPage.postAPI.length ? props.dialogsPage.postAPI[0].body : 'Empty'
      const postOneId = props.dialogsPage.postAPI.length ? props.dialogsPage.postAPI[0].id : 'Undefined'

      // const addMessage = addMessage.bind(this)
      // const sendMessage = (text) => {
      //   txt = text
      // }
      // let txt = 'txts'
      const addMessage = () => {
        // debugger
        this.props.addMessage()
      }
      return (
        <div className={s.dialogs}>
          <div className={s.dialogsItems}>
            {usersItems}
          </div>
          <div onClick={props.getPostBody}>Get posts body</div>
          <div>{postOneBody}</div>
          <div>ID: {postOneId}</div>
          <div>
            <Input updateNewPostText={props.updateNewPostText} value={props.dialogsPage.newMessageText} type='text'/>
          </div>
          <div>
            <button onClick={addMessage}>enter</button>
          </div>
          <div className={s.messages}>
            {messageItems}
          </div>
        </div>
      );
    }
  }

  export default Dialogs;