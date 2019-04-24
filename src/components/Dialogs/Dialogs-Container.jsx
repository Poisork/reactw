import React, { Component } from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator, getPostBodyActionCreator } from '../../redux/dialogs-reduser';
import Dialogs from './DIalogs';
import {connect} from 'react-redux'
import axios from 'axios'

// const DialogsContainer = () => {

    

//   return <storeContext.Consumer> 
//     { store => {
//         const state = store.getState().dialogsPage
//         const addMessage = () => {
//           store.dispatch(addMessageActionCreator())
//           // state = store.getState().dialogsPage
//         }
//         const onMessageChange = (text) => {
//           const action = updateNewMessageTextActionCreator(text)
//           store.dispatch(action)
//         }
//         return <Dialogs updateNewPostText={onMessageChange} dialogs={state.dialogs} messages={state.messages} addMessage={addMessage} newMessageText={state.newMessageText} />
//       }
//     }
//     </storeContext.Consumer>
// }

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = dispatch => {
 
  return {
    updateNewPostText: (text) => {dispatch(updateNewMessageTextActionCreator(text))},
    addMessage: () => {dispatch(addMessageActionCreator())},
    getPostBody: () => {
      const asyncGetPost = () => dispatch => {
       // console.log(dispatch)
          (async function ()  {
            try{
             const json = await axios(`https://jsonplaceholder.typicode.com/comments?postId=${Math.floor(Math.random() * 10) || 1}`)
             dispatch(getPostBodyActionCreator(json.data)) 
            } catch (e) {
             console.error(e)
            }
         })()
      }
      console.log(dispatch)
      dispatch(asyncGetPost()) 
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

  export default DialogsContainer;