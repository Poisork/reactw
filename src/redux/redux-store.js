import {createStore, combineReducers,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import postsReduser from './posts-reduser'
import dialogReduser from './dialogs-reduser'
import sideReduser from './side-reduser'
import usersReducer from './users-reducer';
const reducers = combineReducers({
  postsPage: postsReduser,
  dialogsPage: dialogReduser,
  usersPage: usersReducer,
  sidebarPage: sideReduser
})


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))



export default store;

window.store = store