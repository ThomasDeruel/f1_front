import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeContainer from "../../views/Home/Home";
import CircuitsContainer from '../../views/Circuits/Circuits';
import ConstructorsContainer from '../../views/Constructors/Constructors';

import './App.css';
import '../../styles/reset.css';
const App = () => {
    return (
      <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={HomeContainer}/>
              <Route path="/circuits" component={CircuitsContainer} />
              <Route path="/constructors" component={ConstructorsContainer} />
            </Switch>
          </Router>
      </div>
    );
};

export default App;
