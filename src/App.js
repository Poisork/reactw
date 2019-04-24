import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Side from './components/Side/Side';
import Main from './components/Main/Main';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/Dialogs-Container';
import UsersContainer from './components/Users/UsersContainer';

class App extends  Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return ( 
        <div className="App">
          <Header />
          <Side  // friends={friends}
          />
          <Route />
          <div className='App-wrapper-content'>
            <Route exact path='/dialogs' render={() => <DialogsContainer />}/>
            <Route exact path='/profile' render={() => <Main />}/>
            <Route exact path='/' render={() => <UsersContainer/>}/>
          </div>
        </div>
    
    );
  }
}

export default App;
