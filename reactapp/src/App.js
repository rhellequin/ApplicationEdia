

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import WelcomeEdia from './components/welcomeEdia'
import Landingpage from './components/landingpage'



function App() {
 return (
     <Router>
       <Switch>
         <Route exact path="/" component={WelcomeEdia} />
         <Route exact path="/landingpage" component={Landingpage} />


          
          




       </Switch>
     </Router>
 );
}


export default App;