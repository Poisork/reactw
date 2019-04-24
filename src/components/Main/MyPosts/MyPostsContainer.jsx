import React, { Component } from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/posts-reduser';
import MyPosts from './MyPosts';
import {connect} from 'react-redux'

// const MyPostsContainer  = () => {
//     // const state = this.props.store.getState()
//     // const addPost = addPost.bind(this)
//   return <storeContext.Consumer> 
//     { store => {
//         const state = store.getState()
//         const addPost = () => {
//           store.dispatch(addPostActionCreator())
//         }
//         let onPostChange = (text) => {
//           const action = updateNewPostTextActionCreator(text)
//           store.dispatch(action)
//         }
//         return <MyPosts 
//           newPostText={state.postsPage.newPostText}
//           updateNewPostText={onPostChange}
//           posts={state.postsPage.posts} 
//           addPost={addPost}/> 
//       }
//     }
//   </storeContext.Consumer>
// }

const mapStateToProps = (state) => {
  return {
    posts: state.postsPage.posts,
    newPostText: state.postsPage.newPostText
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {dispatch(addPostActionCreator())},
    updateNewPostText: (text) => {
      const action = updateNewPostTextActionCreator(text)
      dispatch(action)
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;