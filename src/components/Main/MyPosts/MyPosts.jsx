import React, { Component } from 'react';
import s from './index.module.css'
import Post from './Posts/Post';
import Input from '../../Form/inputs/input';
class MyPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { posts } = this.props;
    const mappingPosts = posts.map((el, i) => {
      return <Post img={el.img} title={el.title} likes={el.likes} key={i} />
    })
    // const sendMessage = (text) => {
    //   txt = text
    // }
    // let txt = 'txts'
    const addPost = () => {
       
      this.props.addPost()

    }
    return (
      <div className={s.postBlock}>
        <h2>my post</h2>
        <div>
          new post
          <div>
            <Input updateNewPostText={this.props.updateNewPostText} dispatch={this.props.dispatch} value={this.props.newPostText} type='text'/>
          </div>
          <div>
            <button onClick={addPost}>enter</button>
          </div>

        </div>
        <div className={s.posts} >
          {mappingPosts}
        </div>
      </div>
    );
  }
}

export default MyPosts;