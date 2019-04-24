
// export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,newText: text})
 const FOLLOW = 'FOLLOW'
 const UNFOLLOW = 'UNFOLLOW'
 const SET_USERS = 'SET-USERS'
const initialState = {
  users: [
    // {id:1, img: `https://picsum.photos/200/300/?image=${Math.floor(Math.random() * 100)}`, followed: false, fullname: 'Dmitry Koval', status: 'Kek', location: {city:'Minsk', country: 'Belarus'}},
    // {id:2, img: `https://picsum.photos/200/300/?image=${Math.floor(Math.random() * 100)}`, followed: false, fullname: 'Vitaliy Koval', status: 'LOL', location: {city:'Birik', country: 'Russia'}},
    // {id:3, img: `https://picsum.photos/200/300/?image=${Math.floor(Math.random() * 100)}`, followed: false, fullname: 'Victor Koval', status: 'Aess', location: {city:'Kiev', country: 'Ukraine'}},
    // {id:4, img: `https://picsum.photos/200/300/?image=${Math.floor(Math.random() * 100)}`, followed: true, fullname: 'Pavel Koval', status: '3D rulit', location: {city:'Kharkiv', country: 'Ukraine'}}
  ]
}

const usersReducer = (state = initialState,action) => {
  switch (action.type) { 
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true
            }
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false
            }
          }
          return u
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state
  }
  // return state
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


export default usersReducer