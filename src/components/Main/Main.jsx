import React from 'react';
// import s from './index.module.css'
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Main = () => {
 
  // props.addPost('123')

  return (
    <div> 
      <ProfileInfo />
      <MyPostsContainer  />  
    </div>
  );
}

export default Main;