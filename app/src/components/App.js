import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ContentWrapper from './ContentWrapper';
import Activities from './Activities';
import AboutUsTurismoAventura from './AboutUsTurismoAventura';

import NotFound from './NotFound';

import SideBar from './SideBar';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <ContentWrapper />
          </Route>
          <Route path="/Activities"> 
            <Activities/>
          </Route>
          <Route path="/AboutUsTurismoAventura">
            <AboutUsTurismoAventura/>
          </Route>
          <Route path="/Categoria">
            <Activities/>
          </Route>
          <Route path="/">
            
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
