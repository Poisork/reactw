import React from 'react';

const Input = (props) => {
  console.log(props,'input')
  let newPostEl = React.createRef()
  const change = (e) => {
    const text = e.target.value.trim()
    const actionCreator =  Object.keys(props).filter(el => el.includes('ActionCreator') ? el : false).join()
    // props.dispatch(props[`${actionCreator}`](text))
 
    props.updateNewPostText(text)

    
  }
  return (
    <input ref={newPostEl} onChange={change} value={props.value} type={props.type}></input>
  );
}

export default Input;