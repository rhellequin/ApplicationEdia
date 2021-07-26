

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import WelcomeEdia from './components/welcomeEdia'


function App() {
 return (
     <Router>
       <Switch>
         <Route exact path="/" component={WelcomeEdia} />

          
          




       </Switch>
     </Router>
 );
}


export default App;