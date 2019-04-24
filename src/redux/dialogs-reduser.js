
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const getPostBodyActionCreator = (array) => ({type: GET_POST, payload: array})
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newMessage: text })

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const GET_POST = 'GET-POST'

const initialState = {
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
      postAPI: [],
      messages: [
        {id:1, message:'hi'},
        {id:2, message:'how are you'},
        {id:3, message:'im fine'},
        {id:4, message:'thank you'}
      ],
      newMessageText: 'Nice day'
    }

const dialogReduser = (state = initialState, action) => {
  switch (action.type) { 
    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessageText: action.newMessage
      }
    case ADD_MESSAGE:
      const newMessage = {
        id: state.messages.length + 1,
        message: state.newMessageText
      }
      return {
        ...state,
        newMessageText: '',
        messages: [newMessage, ...state.messages]
      }
    case GET_POST:
      return {
        ...state,
        postAPI: action.payload
      }
  }
  return state
}

export default dialogReduser;