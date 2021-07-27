

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


import WelcomeEdia from './components/welcomeEdia'
import Landingpage from './components/landingpage'
import SearchPage from './components/searchPage'
import ResultPage from './components/resultPage'

import TestEngine from './components/testengine'

function App() {
 return (
     <Router>
       <Switch>
         <Route exact path="/" component={Landingpage} />
         <Route exact path="/landingpage" component={Landingpage} />
         <Route exact path="/searchPage" component={SearchPage} />
         <Route exact path="/resultPage" component={ResultPage} />

         <Route exact path="/test" component={TestEngine} />
          




       </Switch>
     </Router>
 );
}


export default App;