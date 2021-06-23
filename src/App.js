import React from 'react';
import {Route,Switch,BrowserRouter, Redirect} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Tc from './components/TC';
import Privacy from './components/Privacy';


function App() {
  return (
<>
<BrowserRouter>
<Switch>
<Route exact path='/' component={Home} />
<Route exact path='/about' component={About} />
<Route exact path='/contact' component={Contact} />
<Route exact path='/service' component={Service} />
<Route exact path='/privacy_policy' component={Privacy} />
<Route exact path='/tearms_and_conditions' component={Tc} />
<Redirect to='/'/>
 
</Switch>
</BrowserRouter>

    </>
  );
}

export default App;
