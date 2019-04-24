import React, { Component } from 'react';
import s from './index.module.css'

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {img,title,likes} = this.props;
    return (
      <div>
        <div className={s.item}>
          <img src={img} alt={title}/>
          {title}
          <div>
            <span>like{likes}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;