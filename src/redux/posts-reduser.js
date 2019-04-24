 export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,newText: text})
 const ADD_POST = 'ADD-POST'
 const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST_TEXT'

 const initialState = {
  posts: [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Chardin_pastel_selfportrait.jpg/1200px-Chardin_pastel_selfportrait.jpg',
      title: 'Adin',
      id: 1,
      likes: 23
    },
    {
      img: `https://picsum.photos/200/300/?image=${Math.floor(Math.random() * 100)}`,
      title: 'Dva',
      id: 2,
      likes: 1
    },
    {
      img: `https://picsum.photos/200/300/?image=${Math.floor(Math.random() * 100)}`,
      title: 'Tri',
      id: 3,
      likes: 11
    },
    {
      img: `https://picsum.photos/200/300/?image=${Math.floor(Math.random() * 100)}`,
      title: '4', 
      id: 4,
      likes: 1
    },
    {
      img: `https://picsum.photos/200/300/?image=${Math.floor(Math.random() * 100)}`,
      title: '5',
      id: 5,
      likes: 1
    },
    {
      img: `https://picsum.photos/200/300/?image=${Math.floor(Math.random() * 100)}`,
      title: '6',
      id: 6,
      likes: 1
    }
  ],
  newPostText: 'Some text'
}

const postsReduser = (state = initialState,action) => {
  switch (action.type) { 
    case ADD_POST:
      let newPost = {
        id: 7,
        img: `https://picsum.photos/200/300/?image=${Math.floor(Math.random() * 70)}`,
        title: state.newPostText,
        likes: 0
      }
      return {
        ...state,
        newPostText: '',
        posts: [newPost, ...state.posts]
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    default:
      return state
  }
  // return state
}
export default postsReduser