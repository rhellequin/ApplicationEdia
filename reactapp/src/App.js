

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import WelcomeEdia from './components/welcomeEdia'
import Landingpage from './components/landingpage'
import SearchPage from './components/searchPage'
import ResultPage from './components/resultPage'
import SigninPage from './components/signin'
import SignupPage from './components/signup'

import user from './reducers/user.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
const store = createStore(combineReducers({user}));



function App() {
 return (
  <Provider store={store}>
     <Router>
       <Switch>
         <Route exact path="/" component={WelcomeEdia} />
         <Route exact path="/landingpage" component={Landingpage} />
         <Route exact path="/searchPage" component={SearchPage} />
         <Route exact path="/resultPage" component={ResultPage} />
         <Route exact path="/signin" component={SigninPage} />
         <Route exact path="/signin" component={SignupPage} />

       </Switch>
     </Router>
  </Provider>
 );
}


export default App;