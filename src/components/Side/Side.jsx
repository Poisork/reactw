import React from 'react';
import classes from './index.module.css'
import {NavLink} from 'react-router-dom'
import Dialog from '../Dialogs/Dialog/Dialog';
const Side = () => {
  // const [...friends] = props.friends;
  // const friendsItems = friends.map((el,i)=> {
  //   return <Dialog number={el.number} name={el.name} key={i}/>
  // })
  return (
    <nav className={classes.side}>
      <div className={`${classes.item} `}>
        <NavLink 
          activeClassName={classes.active} 
          to='/profile'>
            Profile
        </NavLink>
      </div>
      <div className={`${classes.item} `}>
        <NavLink 
          exact
          activeClassName={classes.active} 
          to='/'>
            Users
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink 
          activeClassName={classes.active} 
          to='/dialogs'
        >
            Messages
        </NavLink>
      </div>
      <div>Friends:</div>
      {/* {friendsItems} */}
    </nav>
  );
}

export default Side;