import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import WelcomeEdia from './components/welcomeEdia'
import Landingpage from './components/landingpage'
import SearchPage from './components/searchPage'
import ResultPage from './components/resultPage'
import SigninPage from './components/signin'
import SignupPage from './components/signup'
import TestEngine from './components/testengine'
import UserAccount from './components/useraccount'




import user from './reducers/user.reducer';
import searchOptions from  './reducers/searchoptions';
import numberOfAids from  './reducers/numberofaids';
import indexOptions from  './reducers/indexoptions';
import aids from './reducers/aids';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';


const store = createStore(combineReducers({user, searchOptions, numberOfAids, indexOptions, aids}));


function App() {
 return (
  <Provider store={store}>
     <Router>
       <Switch>
         <Route exact path="/" component={Landingpage} />
         <Route exact path="/landingpage" component={Landingpage} />
         <Route exact path="/searchPage" component={SearchPage} />
         <Route exact path="/resultPage" component={ResultPage} />
         <Route exact path="/signin" component={SigninPage} />
         <Route exact path="/signup" component={SignupPage} />
         <Route exact path="/test" component={TestEngine} />         
         <Route exact path="/useraccount" component={UserAccount} />

          




       </Switch>
     </Router>
  </Provider>
 );
}


export default App;