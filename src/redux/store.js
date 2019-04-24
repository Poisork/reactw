import postsReduser from "./posts-reduser";
import dialogReduser from "./dialogs-reduser";
 

let store = {
  _state:{
    postsPage: {
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
    },
    messagePage: {
      chats: [
        {
          userOne: 'petya',
          userTwo:'vasya',
          messageOne: ['hi','fine'],
          messageTwo: ['hi','how do you do?']
        }
      ],
      messages: [{text: 'hi'},{text: 'im fine'}],
      message: 'hello'
    },
    dialogsPage: {
      dialogs: [
        {
          name: 'petya',
          id: 1
        },
        {
          name: 'vasya',
          id: 2
        },
        {
          name: 'Anna',
          id: 3
        },
        {
          name: 'user4',
          id: 4
        },
      ],
      messages: [
        {id:1, message:'hi'},
        {id:2, message:'how are you'},
        {id:3, message:'im fine'},
        {id:4, message:'thank you'}
      ],
      newMessageText: 'Nice day'
    },
    sidebarPage: {
      friends: [
        {
          name: 'vasya',
          number: 1
        },
        {
          name: 'user4',
          number: 4
        },
      ]
    }
  },

  _callSubscriber () {
    console.log('State was change')
  },


  getState() {
    return this._state
  },
  subscribe (observer) {
    console.log(this.init)
    this._callSubscriber = observer
  },

  
  addPost () {  

  },
  changeNewPostText (newText) {

  },
  dispatch(action) { // {type: 'ADD-POST' }
    this._state.postsPage = postsReduser(this._state.postsPage,action)
    this._state.dialogsPage = dialogReduser(this._state.dialogsPage,action)
    this._callSubscriber(this._state)
  }
}
 

export default store;
// window.store = store