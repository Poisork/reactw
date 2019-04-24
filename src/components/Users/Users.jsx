import React from 'react'
import s from './index.module.css' 

 let Users = (props) => {
  if (!props.users.length)
    props.setUsers([
      {id:1, img: `https://picsum.photos/200/300/?image=${Math.floor(Math.random() * 60)}`, followed: false, fullname: 'Dmitry Koval', status: 'Kek', location: {city:'Minsk', country: 'Belarus'}},
      {id:2, img: `https://picsum.photos/200/300/?image=${Math.floor(Math.random() * 60)}`, followed: false, fullname: 'Vitaliy Koval', status: 'LOL', location: {city:'Birik', country: 'Russia'}},
      {id:3, img: `https://picsum.photos/200/300/?image=${Math.floor(Math.random() * 60)}`, followed: false, fullname: 'Victor Koval', status: 'Aess', location: {city:'Kiev', country: 'Ukraine'}},
      {id:4, img: `https://picsum.photos/200/300/?image=${Math.floor(Math.random() * 60)}`, followed: true, fullname: 'Pavel Koval', status: '3D rulit', location: {city:'Kharkiv', country: 'Ukraine'}}
    ])
  return (<div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div><img className={s.userPhoto} src={u.img} alt={u.id}/>
          </div>
          <div>
            { u.followed 
                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> 
                : <button onClick={() => props.follow(u.id)}>Follow</button>
            }
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullname}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>)
 }

 export default Users;