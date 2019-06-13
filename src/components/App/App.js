//Configs
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MenuContext } from '../../helpers/context/menu-context';
import '../../styles/scss/App.scss';
//Containers
import HomeContainer from "../../views/Home/Home";

import Pilots from '../../views/Pilots/Pilots';
import Ecurie from '../../views/Ecurie/Ecurie';

//Styles
import './App.css';
import '../../styles/css/reset.css';
import '../../styles/css/fonts.css';


const App = () => {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/pilots" component={Pilots} />
            <Route path="/ecurie" component={Ecurie} />
          </Switch>
        </Router>
    </div>
  );
};

export default App;
