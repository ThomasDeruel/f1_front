//Configs
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MenuContext } from '../../helpers/context/menu-context';
import '../../styles/scss/App.scss';
//Containers
import HomeContainer from "../../views/Home/Home";
import CircuitsContainer from '../../views/Circuits/Circuits';
import ConstructorsContainer from '../../views/Constructors/Constructors';
import PilotesContainer from '../../views/Pilotes/Pilotes';

//Styles
import './App.css';
import '../../styles/reset.css';

const App = () => {
  // use a global State to open/close my menu
  // here is my state menu
  // userState: the default value
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/circuits" component={CircuitsContainer} />
            <Route path="/constructors" component={ConstructorsContainer} />
          </Switch>
        </Router>
      </MenuContext.Provider>
    </div>
  );
};

export default App;
