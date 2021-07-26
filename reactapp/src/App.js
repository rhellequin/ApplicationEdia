

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


import WelcomeEdia from './components/welcomeEdia'
import SearchPage from './components/searchPage'



function App() {
 return (
     <Router>
       <Switch>
         <Route exact path="/" component={WelcomeEdia} />
         <Route exact path="/searchPage" component={SearchPage} />

          
          




       </Switch>
     </Router>
 );
}


export default App;