//Configs
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MenuContext } from '../../helpers/context/menu-context';
import '../../styles/scss/App.scss';
//Containers
import HomeContainer from "../../views/Home/Home";
import NavBar from "../../components/NavBar";
import Pilots from '../../views/Pilots/Pilots';
import Ecurie from '../../views/Ecurie/Ecurie';

//Styles
import './App.css';
import '../../styles/reset.css';
import '../../styles/fonts.css';


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
            <NavBar/>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/pilots" component={Pilots} />
            <Route path="/ecurie" component={Ecurie} />
          </Switch>
        </Router>
      </MenuContext.Provider>
    </div>
  );
};

export default App;
